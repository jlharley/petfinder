angular.module('petFinderApp')
    .directive('petResult', function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        /*scope: {
            isActiveLimit: "=",
            pets: "=",
            $scope: "="
        },*/
        templateUrl: 'pages/resultlist.html'
//        controller: function()...
//        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});