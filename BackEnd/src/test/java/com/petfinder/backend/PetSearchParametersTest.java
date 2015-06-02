package com.petfinder.backend;

import static org.junit.Assert.*;

import org.junit.Test;
import org.petfinder.model.PetSearchParameters;

public class PetSearchParametersTest {

	private PetSearchParameters psp = new PetSearchParameters();
	private String animal = "dog";
	
	@Test
	public void testAnimal() {
		psp.setAnimal(animal);
		assertEquals(animal, psp.getAnimal());
	}
	
	@Test
	public void testBreed() {
		psp.setBreed("beagle");
		assertEquals("beagle", psp.getBreed());
	}
	
	@Test
	public void testSize() {
		psp.setSize("S");
		assertEquals("S", psp.getSize());
	}
	
	@Test
	public void testSex() {
		psp.setSex(Character.valueOf('F'));
		assertEquals(Character.valueOf('F'), psp.getSex());
	}
	
	@Test
	public void testLocation(){
		psp.setLocation("11060 messmore");
		assertEquals("11060 messmore", psp.getLocation());
	}
	
	@Test
	public void testAge() {
		psp.setAge("6");
		assertEquals("6", psp.getAge());
	}
	
	@Test
	public void testOffset() {
		psp.setOffset(1);
		assertSame(1, psp.getOffset());
	}
	
	@Test
	public void testCount() {
		psp.setCount(2);
		assertSame(2, psp.getCount());
	}
	
	@Test
	public void testOutput() {
		psp.setOutput("hi");
		assertEquals("hi", psp.getOutput());
	}
	
	@Test
	public void testFormat() {
		psp.setFormat("...");
		assertEquals("...", psp.getFormat());
	}
}