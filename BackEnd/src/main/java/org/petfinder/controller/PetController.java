package org.petfinder.controller;

import java.util.Locale;

import org.petfinder.entity.PetfinderPetRecord;
import org.petfinder.entity.PetfinderPetRecordList;
import org.petfinder.model.Pet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
		//PetfinderPetRecord pfrff = pfc.randomPet("dog", "pitbull", "L", 'm', "48317", null, null, "formate=json");\
		
		
		
		return "petName	: " + pfc.shelterDogs().size();
	}
	
	@RequestMapping(value="/getPet", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	
	public @ResponseBody Pet getPet() {
		logger.info("getPet");
		
		Pet dog1 = new Pet();
		
		PetFinderConsumer pfc = new PetFinderConsumer();
		pfc.init();
		PetfinderPetRecord pfrff = pfc.randomPet(null, null, null, null, null, null, null, null);
		
		//dog1.setName(pfrff);
		System.out.println(pfrff);
		return dog1;
	}
	
}
