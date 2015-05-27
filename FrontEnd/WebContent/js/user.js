angular.module('petFinderApp').factory('User', function(){
	return function(username) {
        this.username = username;
        this.firstName = "";
        this.lastName = "";
        this.nickname = "";

        this.getUsername = function() {
            return this.username;
        };
        this.getFirstName = function() {
            return this.firstName;
        };
        this.getLastName = function() {
            return this.lastName;
        };
        this.getNickname = function() {
            return this.nickname;
        };
        this.getFullName = function() {
            return this.firstName + " " + this.lastName;
        };
    };
});