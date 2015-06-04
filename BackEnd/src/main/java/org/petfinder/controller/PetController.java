package org.petfinder.controller;

import java.util.List;
import java.util.Locale;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.petfinder.entity.PetfinderPetRecord;
import org.petfinder.entity.PetfinderPetRecordList;
import org.petfinder.model.PetSearchParameters;
import org.petfinder.model.UserAccount;
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
			PetfinderPetRecordList findPet = pfc.findPet(null, null, null, null, "48317", null, null, 1, null, null);
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
			logger.error("Search results were incorrect!");
		}
		
		return null;
	}

	private static SessionFactory createSessionFactory() {
	    Configuration configuration = new Configuration();
	    configuration.configure("hibernate.cfg.xml");
	    System.out.println("Hibernate Annotation Configuration loaded");
	    
	    serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
	    //serviceRegistry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();
	    System.out.println("Hibernate Java Config serviceRegistry created");
	    
	    sessionFactory = configuration.buildSessionFactory(serviceRegistry);
	    return sessionFactory;
	}
	
	/*@RequestMapping(value = "/initDB")
	private @ResponseBody void initDB() {
		
		// Contains all the data regarding the hibernate config file
		SessionFactory sessionFactory = createSessionFactory();
				
		// Opens a database connection
		Session session = sessionFactory.openSession();
		
		UserAccount bob = new UserAccount();
		bob.setEmailAddress("bob@gmail.com");
		
		// Database usage 
		session.beginTransaction();
		session.save(bob);
		session.getTransaction().commit();
		session.close();
		
		// Closes a database connection
		sessionFactory.close();
	}*/
	
	@RequestMapping(value = "/addUserDB", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody void addUserDB(@RequestBody UserAccount account) {

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
		}
		
	}
	
	@RequestMapping(value = "/addLikedPet", method = RequestMethod.GET)
	public @ResponseBody void addLikedPet(/*@RequestBody UserPreferenceData likedPet*/) {
		
		try {
			SessionFactory sessionFactory = createSessionFactory();
			Session session = sessionFactory.openSession();

			UserLikedPet data = new UserLikedPet();
			data.setEmailAddress("asdfadf@asdefaf.com");
			data.setPetId(11112);
			
			
			session.beginTransaction();
			session.save(data);
			session.getTransaction().commit();
			session.close();
			sessionFactory.close();
			
			logger.debug("User has been added to the DB!");
			}catch(Exception e) {
				logger.debug("User has been added to the DB!");
			}
	}
}