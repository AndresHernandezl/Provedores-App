var app = angular.module('appNecxo', ['ui.router','appNecxo.controllers', 'appNecxo.services']);

app.config(function($stateProvider , $urlRouterProvider){
    // parametros de configuracion
	$authProvider.loginUrl = "/login";
	$authProvider.signupUrl = "/signup";

	$authProvider.tokenName = "token";
	$authProvider.tokenPrefix = "appNecxo";

    $stateProvider.state('home',{
        url: '/',
        templateUrl: 'view/home/index.html',
        controller: 'homeController'
    });
	$stateProvider.state('home',{
        url: '/product',
        templateUrl: 'view/category/home.html'
    });

    $urlRouterProvider.otherwise('home');
});
