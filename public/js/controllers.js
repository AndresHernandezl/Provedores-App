var app = angular.module('appNecxo.controllers', ['satellizer'])

app.controller('homeController', ['$scope', '$auth', '$state', function($scope, $auth, $state){

	// funcion para hacer login
	$scope.login = function(){
		$auth.login({
			username: $scope.username,
			password: $scope.password
		})
		.then(function(data){
			console.log(data);
			$state.go('product');
		})
		.catch(function(response){
			// si ha habido errores
			console.log(response);
		});
	};
}]);
