angular.module('petFinderApp').service('user', function(){
	var user = this;
	user.username = "";
	user.firstName = "";
	user.lastName = "";
	user.nickname = "";

	user.getUsername = function() {
        return user.username;
    };
    user.getFirstName = function() {
        return user.firstName;
    };
    user.getLastName = function() {
        return user.lastName;
    };
    user.getNickname = function() {
        return user.nickname;
    };
    user.getFullName = function() {
        return user.firstName + " " + user.lastName;
    };
    user.setUsername = function(name) {
    	user.username = name;
    };
    user.setFirstName = function(name) {
    	user.firstName = name;
    };
    user.setLastName = function(name) {
    	user.lastName = name;
    };
    user.setNickname = function(name) {
    	user.nickname = name;
    };
});