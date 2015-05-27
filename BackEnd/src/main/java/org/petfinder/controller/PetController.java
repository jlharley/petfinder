package org.petfinder.controller;

import java.awt.List;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Locale;

import org.petfinder.entity.PetfinderPetRecord;
import org.petfinder.entity.PetfinderPetRecordList;
import org.petfinder.entity.PetfinderShelterRecordList;
import org.petfinder.model.PetSearchParameters;
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
			
			
			PetfinderPetRecordList findPet = pfc.findPet(null, null, null, null, "48317", null, null, null, null, null);
			
			return "" + findPet.getPet().toString();
			//BigInteger joeyID = pfc.shelterCats().get(0).getId();
			//return "" + pfc.readPet(joeyID, null).getName();
		} catch(NullPointerException e) {
			logger.error("Search results were incorrect!");
		}
		
		//PetfinderShelterRecordList pfpr = pfc.findShelter("48317", null, null, null, "format=json");
		//pfpr.getShelter().get(0).getAddress1()
		
		return "# of Dogs: " + pfc.shelterDogs().size();
	}
	
	@RequestMapping(value="/tmp", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	
	public @ResponseBody void getPet() {
		logger.info("getPet");
		
		PetFinderConsumer pfc = new PetFinderConsumer();
		pfc.init();

	}
	
	@RequestMapping(value="/getPet", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody PetSearchParameters searchPet(@RequestBody PetSearchParameters params) {
		
		System.out.println("PARAMETERS: " + params.toString());
		System.out.println(params.getAnimal() + "-" + params.getAge() + "-");
		
		
		
		return params;
	}
}
