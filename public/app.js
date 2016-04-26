angular.module('homeApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    })
    .state('about', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl'
    });

    $urlRouterProvider.otherwise('/');


});
