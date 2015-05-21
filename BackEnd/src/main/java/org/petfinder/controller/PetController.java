package org.petfinder.controller;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.petfinder.model.Pet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import com.systemsinmotion.petrescue.web.PetFinderConsumer;



@RestController
public class PetController {
	
	private static final Logger logger = LoggerFactory.getLogger(PetController.class);
	

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	
	@RequestMapping(value="/getPet", method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<Pet> getPet() {
		logger.info("Start getDummyPet");
		List<Pet> pets = new ArrayList<Pet>();
		for (int i = 0; i < 100; i++){
			Pet pet = new Pet();
			pet.setName("pet"+i);
			pet.setAge(i);
			pets.add(pet);
		}
		return pets;
	}
	
}
