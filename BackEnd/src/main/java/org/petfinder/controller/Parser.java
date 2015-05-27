package org.petfinder.controller;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.petfinder.model.PetSearchParameters;

import java.util.ArrayList;

/**
 * Created by jhorwitz on 5/26/2015.
 */
public class Parser{

    public ArrayList<String> info = new ArrayList<String>();

    public Parser(PetSearchParameters psp) throws ParseException {
        parseIt(psp);
    }


    public String parseIt(PetSearchParameters f) throws ParseException {


        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObject = (JSONObject) jsonParser.parse(String.valueOf(f));

        //Get the Shelter Pet ID
        Long shelterPetID = (Long) jsonObject.get("shelterPetId");
        info.add(String.valueOf(shelterPetID));

        //Get the Description of the Pet
        String description = (String) jsonObject.get("description");
        info.add(description);

        //Get the Shelter ID
        String shelter = (String) jsonObject.get("shelterId");
        System.out.println(shelter);
        info.add(shelter);

        //Get the pets name
        String name = (String) jsonObject.get("name");
        System.out.println(name);
        info.add(name);

        //Get Animal Type
        String animal = (String) jsonObject.get("animal");
        System.out.println(animal);
        info.add(animal);

        //Get Sex
        String sex = (String) jsonObject.get("sex");
        System.out.println(sex);
        info.add(sex);

        //Get Age
        String age = (String) jsonObject.get("age");
        System.out.println(age);
        info.add(age);

        //Get ID
        Long id = (Long) jsonObject.get("id");
        System.out.println(id);
        info.add(String.valueOf(id));

        return "Shelter: " + shelter + " Name: " + name + " Age: " + age + " Type: " + animal + " Sex: " + sex + " ID: " + id + " Description: " + description;

    }

}
