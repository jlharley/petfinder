package org.petfinder.controller;

import java.math.BigInteger;
import java.util.List;
import java.util.Locale;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.petfinder.entity.PetfinderPetRecord;
import org.petfinder.entity.PetfinderPetRecordList;
import org.petfinder.model.PetSearchParameters;
import org.petfinder.model.UserAccount;
import org.petfinder.model.UserDislikedPet;
import org.petfinder.model.UserLikedPet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.systemsinmotion.petrescue.web.PetFinderConsumer;


@Controller
public class PetController {
	
	private static final Logger logger = LoggerFactory.getLogger(PetController.class);
	private static SessionFactory sessionFactory;
	private static ServiceRegistry serviceRegistry;

	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public @ResponseBody String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		PetFinderConsumer pfc = new PetFinderConsumer();
		pfc.init();	
		
		try {
			PetfinderPetRecordList findPet = pfc.findPet(null, null, null, null, "48317", null, null, 5, null, null);
			return "" + findPet.getPet().toString();
		} catch(NullPointerException e) {
			logger.error("Search results were incorrect!");
		}
		
		return "# of Dogs: " + pfc.shelterDogs().size();
	}
	
	@RequestMapping(value="/getPet", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<PetfinderPetRecord> searchPet(@RequestBody PetSearchParameters params) {
		
		logger.debug("SEARCH PARAMETERS: " + params.toString());
		
		PetFinderConsumer pfc = new PetFinderConsumer();
		pfc.init();	
		
		try {
		PetfinderPetRecordList findPet = pfc.findPet(params.getAnimal(), params.getBreed(), params.getSize(), 
				params.getSex(), params.getLocation(), params.getAge(), params.getOffset(), params.getCount(), 
				params.getOutput(), params.getFormat());
		
		List<PetfinderPetRecord> petList = findPet.getPet();
		
		return petList;
		}catch(NullPointerException e) {
			logger.error("Search results were incorrect!: " + e);
		}
		
		return null;
	}

	private static SessionFactory createSessionFactory() {
	    Configuration configuration = new Configuration();
	    configuration.configure("hibernate.cfg.xml");
	    System.out.println("Hibernate Annotation Configuration loaded");
	    
	    serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
	    System.out.println("Hibernate Java Config serviceRegistry created");
	    
	    sessionFactory = configuration.buildSessionFactory(serviceRegistry);
	    return sessionFactory;
	}
	
	@RequestMapping(value = "/addUserDB", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody void addUserDB(@RequestBody UserAccount account) {
		
		System.out.println("EMAIL:" + account.getEmailAddress());
		
		try {
			SessionFactory sessionFactory = createSessionFactory();
			Session session = sessionFactory.openSession();
	
			session.beginTransaction();
			session.save(account);
			session.getTransaction().commit();
			session.close();
			sessionFactory.close();
			
			logger.debug("User has been added to the DB!");
		}catch(Exception e) {
			logger.debug("Failed to add user to the Database!\n" + e);
			//close session if failed??
		}
		
	}
	
	@RequestMapping(value = "/addLikedPet", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody void addLikedPet(@RequestBody UserLikedPet likedPet) {
		
		try {
			SessionFactory sessionFactory = createSessionFactory();
			Session session = sessionFactory.openSession();

			System.out.println("EMAIL: " + likedPet.getEmailAddress());
			
			session.beginTransaction();
			session.save(likedPet);
			session.getTransaction().commit();
			session.close();
			sessionFactory.close();
			
			logger.debug("Liked Pet has been added to the DB!");
			}catch(Exception e) {
				logger.debug("Failed to add Liked Pet to the Database!\n" + e);
				//close session if failed??
			}
	}
	
	@RequestMapping(value = "/addDislikedPet", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody void addDislikedPet(@RequestBody UserDislikedPet dislikedPet) {
		
		try {
			SessionFactory sessionFactory = createSessionFactory();
			Session session = sessionFactory.openSession();
			

			session.close();
			sessionFactory.close();
			
			logger.debug("Disliked Pet has been added to the DB!");
			}catch(Exception e) {
				logger.debug("Failed to add Disliked Pet to the Database!\n" + e);
				//close session if failed??
			}
	}
	
	@RequestMapping(value = "/getLikedPets", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<PetfinderPetRecord> getLikedPets(@RequestBody UserAccount user) {
		logger.debug("Retrieving Liked Pets from the DB");
		
		PetfinderPetRecordList likedPetRecords = new PetfinderPetRecordList();
		PetFinderConsumer pfc = new PetFinderConsumer();
		pfc.init();	
		
		try {
			SessionFactory sessionFactory = createSessionFactory();
			Session session = sessionFactory.openSession();

			// Queries the DB for the user's liked Pets
			SQLQuery query = session.createSQLQuery("select petId from user_liked where emailAddress='" + user.getEmailAddress() + "'");
			System.out.println("Query: " + query.list().toString());

			// Retrieves the PetfinderPetRecords from the PetFinder API of the PetIDs retrieved from the DB
			for(int i = 0; i < query.list().size(); i++) {
				PetfinderPetRecord tmpRecord = pfc.readPet(BigInteger.valueOf((Integer)query.list().get(i)), null);
				likedPetRecords.getPet().add(tmpRecord);
			}
			
			session.close();
			sessionFactory.close();
			
			return likedPetRecords.getPet();
		}catch(NullPointerException e) {
			logger.error("Search results were incorrect!: " + e);
			//close session if failed??
		}
		
		return null;
	}
	
	@RequestMapping(value = "/getDislikedPets", method = RequestMethod.GET/*, consumes = {MediaType.APPLICATION_JSON_VALUE}*/)
	public @ResponseBody List<PetfinderPetRecord> getDislikedPets(/*@RequestBody UserLikedPet user*/) {
		logger.debug("Retrieving Disliked Pets from the DB");
		
		PetfinderPetRecordList dislikedPetRecords = new PetfinderPetRecordList();
		PetFinderConsumer pfc = new PetFinderConsumer();
		pfc.init();	
		
		try {
			SessionFactory sessionFactory = createSessionFactory();
			Session session = sessionFactory.openSession();

			// Queries the DB for the user's liked Pets
			SQLQuery query = session.createSQLQuery("select petId from user_disliked where emailAddress='bartman@gmail.com'");
			System.out.println("Query: " + query.list().toString());

			// Retrieves the PetfinderPetRecords from the PetFinder API of the PetIDs retrieved from the DB
			for(int i = 0; i < query.list().size(); i++) {
				PetfinderPetRecord tmpRecord = pfc.readPet(BigInteger.valueOf((Integer)query.list().get(i)), null);
				dislikedPetRecords.getPet().add(tmpRecord);
			}
			
			session.close();
			sessionFactory.close();
			
			return dislikedPetRecords.getPet();
		}catch(NullPointerException e) {
			logger.error("Search results were incorrect!: " + e);
			//close session if failed??
		}
		
		return null;
	}
}