'use strict';

/* App Module */

var symfonyApp = angular.module('apka', [
    'ngRoute',
    'symfonyControllers'
]);

symfonyApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/angular_demo',{
                templateUrl: Routing.generate('angular_demo'),
                controller: 'DemoCtrl'
            }).
            when('/homepage',{
                templateUrl: Routing.generate('homepage'),
                controller: 'DemoCtrl'
            }).
            when('/first_demo',{
                templateUrl: Routing.generate('first_demo'),
                controller: 'DemoCtrl'
            }).
            when('/second_demo',{
                templateUrl: Routing.generate('second_demo'),
                controller: 'DemoCtrl'
            }).
            when('/third_demo',{
                templateUrl: Routing.generate('third_demo'),
                controller: 'DemoCtrl'
            }).
            when('/fourth_demo',{
                templateUrl: Routing.generate('fourth_demo'),
                controller: 'DemoCtrl'
            }).
            when('/fifth_demo',{
                templateUrl: Routing.generate('fifth_demo'),
                controller: 'DemoCtrl'
            }).
            otherwise({
                redirectTo: '/angular_demo'
            });
    }]);


