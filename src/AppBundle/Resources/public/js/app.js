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
            otherwise({
                redirectTo: '/angular_demo'
            });
    }]);

