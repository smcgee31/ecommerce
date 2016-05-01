
// set app name, call ui.router, and chain config for views
angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'mainCtrl'
    })
    .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'mainCtrl'
    });



});
