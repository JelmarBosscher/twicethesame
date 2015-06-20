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

            // route for the tour page
            .when('/media', {
                templateUrl : 'pages/media.html',
                controller  : 'mediaController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            .otherwise({
                 redirectTo: '/',
                 controller: 'mainController'
            });


    });

    // create the controller and inject Angular's $scope
    bandApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.title = 'This is a new title';
        $scope.pageClass = 'page-home';
    });

    bandApp.controller('bandController', function($scope) {
    	$scope.pageClass = 'page-band';
        $scope.member1 = 'ritchie';
        $scope.member2 = 'mart';
        $scope.member3 = 'pez';
        $scope.member4 = 'matthijs';
    });

    bandApp.controller('mediaController', function($scope) {
        $scope.pageClass = 'page-media';
    });

    bandApp.controller('contactController', function($scope) {
    	$scope.pageClass = 'page-contact';
    });
