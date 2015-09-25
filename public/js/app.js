var app = angular.module('appNecxo', ['ui.router','appNecxo.controllers']);

app.config(function($stateProvider , $urlRouterProvider, $authProvider){
    // parametros de configuracion
	$authProvider.loginUrl = "/login";
	$authProvider.signupUrl = "/signup";

	$authProvider.tokenName = "token";
	$authProvider.tokenPrefix = "appNecxo";

    $stateProvider

    .state('home',{
        url: '/home',
        templateUrl: 'view/home/index.html',
        controller: 'homeController'
    })

	.state('product',{
        url: '/product',
        templateUrl: 'view/category/home.html'
    });

    $urlRouterProvider.otherwise('home');
});
