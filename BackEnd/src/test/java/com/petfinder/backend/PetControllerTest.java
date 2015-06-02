package com.petfinder.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

//http://docs.spring.io/spring/docs/3.2.x/spring-framework-reference/htmlsingle/#spring-mvc-test-framework

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration("test-servlet-context.xml")
public class PetControllerTest {

	@Autowired
	private WebApplicationContext wac;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

	@Test
	public void getAccount() throws Exception {
//		this.mockMvc
//				.perform(get("/getPet").accept(MediaType.parseMediaType("application/json;charset=UTF-8")));
				//.andExpect(status().isOk());
/*				.andExpect(content().contentType("application/json"))
				.andExpect(jsonPath("$.name").value("fido"));*/
	}
	/*
	 * @InjectMocks PetController controller;
	 * 
	 * @Mock PetSearchParameters psp;
	 * 
	 * @Mock org.springframework.web.servlet.View mockView;
	 * 
	 * MockMvc mockMvc;
	 * 
	 * @Before public void setUp() throws Exception {
	 * MockitoAnnotations.initMocks(this); mockMvc =
	 * MockMvcBuilders.standaloneSetup(controller) .setSingleView(mockView)
	 * .build(); }
	 * 
	 * @Test public void testGetPet() throws Exception { PetfinderPetRecord
	 * record = new PetfinderPetRecord(); record.setName("tony");
	 * 
	 * 
	 * 
	 * }
	 */
}
