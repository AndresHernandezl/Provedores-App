var app = angular.module('appNecxo.controllers', ['ui.router', 'satellizer'])

app.controller('homeController', ['$scope', '$auth', function($scope, $auth){

	// funcion para hacer login
	$scope.login = function(){
		console.log('Hola');
		$auth.login({
			username: $scope.username,
			password: $scope.password
		})
		.then(function(data){
			console.log(data);
			// $location.path('/home');
		})
		.catch(function(response){
			// si ha habido errores
			console.log(response);
		});
	};	
}]);