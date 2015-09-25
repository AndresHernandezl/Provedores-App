var app = angular.module('appNecxo', ['appNecxo.controllers', 'appNecxo.services']);

app.config(function($stateProvider , $urlRouterProvider){
    // parametros de configuracion
	$authProvider.loginUrl = "/login";
	$authProvider.signupUrl = "/signup";

	$authProvider.tokenName = "token";
	$authProvider.tokenPrefix = "appNecxo";

    $stateProvider.state('home',{
        url: '/home',
        templateUrl: 'view/category/home.html',
        controller: 'homeController'
    });

    $stateProvider.state('category',{
        url: '/category/{id}',
        templateUrl:''
    });



    $urlRouterProvider.otherwise('home');
});
