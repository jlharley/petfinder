package org.petfinder.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_liked")
public class UserLikedPet implements Serializable{

	@Id
	private String emailAddress;
	
	@Id
	private int petId;

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public int getPetId() {
		return petId;
	}

	public void setPetId(int i) {
		this.petId = i;
	}
	
	
	
	
}
