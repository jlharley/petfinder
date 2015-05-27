angular.module('petFinderApp').service('User', function(){
        this.username = "";
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
        this.setUsername = function(name) {
            this.username = name;
        };
        this.setFirstName = function(name) {
            this.firstName = name;
        };
        this.setLastName = function(name) {
            this.lastName = name;
        };
        this.setNickname = function(name) {
            this.nickname = name;
        };
});