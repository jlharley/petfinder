package org.petfinder.spring.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import org.petfinder.spring.model.Pet;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

// Handles requests for the Pet Service
@RestController
@RequestMapping("/pet")
public class PetController {

	private static final org.slf4j.Logger logger = LoggerFactory
			.getLogger(PetController.class);

	// Map to store whatever pets we want
	Map<Integer, Pet> petData = new HashMap<Integer, Pet>();

	@RequestMapping(value = "/dummy", method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody Pet getDummyPet() {
		logger.info("Start getDummyPet");
		Pet pet = new Pet();
		pet.setId(9999);
		pet.setName("Dummy");
		pet.setCreatedDate(new Date());
		petData.put(9999, pet);
		return pet;
	}

	@RequestMapping(value = PetRestURIConstants.GET_PET, method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody Pet getPet(@PathVariable("id") int petId) {
		logger.info("Start getPet. ID=" + petId);

		return petData.get(petId);
	}

	@RequestMapping(value = PetRestURIConstants.GET_ALL_PET, method = RequestMethod.GET, produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody List<Pet> getAllPet() {
		logger.info("Start getAllPet.");
		List<Pet> pets = new ArrayList<Pet>();
		Set<Integer> petIdKeys = petData.keySet();
		for (Integer i : petIdKeys) {
			pets.add(petData.get(i));
		}
		return pets;
	}

	@RequestMapping(value = PetRestURIConstants.CREATE_PET, method = RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody Pet createPet(@RequestBody Pet pet) {
		logger.info("Start createPet.");
		pet.setCreatedDate(new Date());
		petData.put(pet.getId(), pet);
		return pet;
	}

	@RequestMapping(value = PetRestURIConstants.DELETE_PET, method = RequestMethod.DELETE, produces = { MediaType.APPLICATION_JSON_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody Pet deletePet(@PathVariable("id") int petId) {
		logger.info("Start deletePet.");
		Pet pet = petData.get(petId);
		petData.remove(petId);
		return pet;
	}
}
