// script.js

    // create the module and name it bandApp
    var bandApp = angular.module('bandApp', ['ngRoute', 'ngAnimate', 'ngLoadScript']);

    // configure our routes
    bandApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/band', {
                templateUrl : 'pages/band.html',
                controller  : 'bandController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            // route for the contact page
            .when('/example', {
                templateUrl : 'pages/example.html',
                controller  : 'exampleController'
            });
    });

    // create the controller and inject Angular's $scope
    bandApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.pageClass = 'page-home';
        $scope.message = 'Everyone come and see how good I look!';
    });

    bandApp.controller('bandController', function($scope) {
    	$scope.pageClass = 'page-band';
        $scope.message = 'Look! I am an about page.';
    });

    bandApp.controller('contactController', function($scope) {
    	$scope.pageClass = 'page-contact';
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    bandApp.controller('exampleController', function($scope) {
        $scope.pageClass = 'page-example';
    });
