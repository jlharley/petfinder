package org.petfinder.controller;

import java.util.List;
import java.util.Locale;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.petfinder.entity.PetfinderPetRecord;
import org.petfinder.entity.PetfinderPetRecordList;
import org.petfinder.model.PetSearchParameters;
import org.petfinder.model.UserAccount;
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
	
	@RequestMapping(value="/getPetTEST", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	
	public @ResponseBody String getPet() {
		logger.info("getPet");
		
		PetFinderConsumer pfc = new PetFinderConsumer();
		pfc.init();

		PetfinderPetRecord ppr = new PetfinderPetRecord();
		ppr.setName("fido");
		
		return "{name:fido}";
	}
	
	@RequestMapping(value="/getPet", method = RequestMethod.GET, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody List<PetfinderPetRecord> searchPet(@RequestBody PetSearchParameters params) {
		
		System.out.println("SEARCH PARAMETERS: " + params.toString());
		
		PetFinderConsumer pfc = new PetFinderConsumer();
		pfc.init();	
		
		PetfinderPetRecordList findPet = pfc.findPet(params.getAnimal(), params.getBreed(), params.getSize(), 
				params.getSex(), params.getLocation(), params.getAge(), params.getOffset(), params.getCount(), 
				params.getOutput(), params.getFormat());
		
		List<PetfinderPetRecord> petList = findPet.getPet();
		
		return petList;
	}

	
	@RequestMapping(value = "/initDB")
	public @ResponseBody void initDB() {
		
		// Contains all the data regarding the hibernate config file
		SessionFactory sessionFactory = new AnnotationConfiguration().configure().buildSessionFactory();
				
		// Opens a database connection
		Session session = sessionFactory.openSession();
		
		UserAccount bob = new UserAccount();
		bob.setEmailAddress("bob@yahoo.com");
		
		// Database usage 
		session.beginTransaction();
		session.save(bob);
		session.getTransaction().commit();
		session.close();
		
		// Closes a database connection
		sessionFactory.close();
	}
}