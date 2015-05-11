//var MYAPP = MYAPP || {};

var Pet = function () {};

var petresult = new Pet();

var btnjson;

function sendPetRequest(){
	$.ajax({
	type: "POST",
	url: "http://localhost:8080/spring/pet/dummy",
	data: JSON.stringify({
	}),
	contentType: 'application/json',
	success: function(data) {
		displayPet(data, "#result");
	}
	});
}

function displayPet(pet, destination){
	console.log("displayPet");
	$("#result").empty();
	console.log("displayPet empty Pet");
	$.each(Object.keys(pet), function(i, field){
		console.log("displayPet each loop: " + field);	
		switch(field) {
	    case "name":
	    	$(destination).append("<h2>" + pet[field] + "</h2>");
			$("#viewMore").show();
	        break;
	    case "id":
	        break;
	    default:
	    	$(destination).append("<p>" + field + ": " + pet[field] + "</p>");
		}
	});
	console.log("exit displayPet")
}

window.onload = function() {
	//  OBJECTS
	//    Buttons
	btnjson = document.getElementById("btnjson");
	viewMore = document.getElementById("viewMore");
	
	
	//  EVENTS
	btnjson.addEventListener("click", function(){
		sendPetRequest();
		//retrievePet();
	});
	
	viewMore.addEventListener("click", function(){
	});
}

