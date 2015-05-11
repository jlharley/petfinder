//var MYAPP = MYAPP || {};

var Pet = function () {};

var petresult = new Pet();

var btnjson;

function sendPetRequest(){
	$.ajax({
	type: "POST",
	url: "http://localhost:8080/Training/PetFinder",
	data: JSON.stringify({
		"name": "catdog",
		"age": "7",
		"gender": "female",
		"color": "white",
		"breed": "german shepard",
		"leash": "yes"
	}),
	contentType: 'application/json',
	success: function(data) {
		alert(window.location.search);
		if(data.status == 'OK') {
			
		}
		else {
			//alert('Failed: ' + data.status + ', ' + data.errorMessage);
		}
	}
	});
}

function retrievePet(){
	console.log("retrievePet");

	 $.getJSON('js/spike_pet.json', function(ajaxresult){
		console.log("property: " + ajaxresult.property);
		petresult = ajaxresult;
	 })
	 //feel free to use chained handlers, or even make custom events out of them!
	.success(function() {
		displayPet(petresult, "#result"); 
	})
	.error(function() { 
		console.log("error"); 
	})
	.complete(function() { 
		console.log("complete"); 
	});
}

function displayPet(pet, destination){
	console.log("displayPet");
	$("#result").empty();
	console.log("displayPet empty Pet");
	$.each(Object.keys(pet), function(i, field){
		console.log("displayPet each loop: " + field);		
		if(field == "name"){
			$("#result").append("<h2>" + pet[field] + "</h2>");
			$("#viewMore").show();
		} else {
			$("#result").append("<p>" + field + ": " + pet[field] + "</p>");
		}
	});
	console.log("exit displayPet")
}

window.onload = function() {
	btnjson = document.getElementById("btnjson");
	viewMore = document.getElementById("viewMore");
	
	
	
	
	
	btnjson.addEventListener("click", function(){
		//sendPetRequest();
		retrievePet();
	});
	
	viewMore.addEventListener("click", function(){
	});
}

