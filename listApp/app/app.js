var app = angular.module('app', ['ngRoute']);

 
app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'firstController'
		})
		.when('/list', {
			templateUrl: 'views/list.html',
			controller: 'firstController'
		}).otherwise({
			redirectTo: '/home'
		}
		);
});
app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

app.directive('randomProduct', [function(){
	return {
		restrict: 'E',
		scope: {
			products: '=',
			title: '='
		},
		templateUrl: 'views/random.html',
		controller: function($scope){
			$scope.random = Math.floor(Math.random()*4);
		}
	};
}]);

app.controller(	'firstController',['$scope', '$http', function($scope, $http){
	$scope.message =  "Hello world!"
 	
  	$scope.languages = [
		{
			name: "daulet",
			cash: 18,
			belt: "yellow",
			img: "http://lorempixel.com/40/40",
			available: true
		},
		{
			name: "da",
			cash: 20,
			belt: "green",
			img: "http://lorempixel.com/40/40",
			available: true
		},
		{
			name: "adad",
			cash: 24,
			belt: "black",
			img: "http://lorempixel.com/40/40",
			available: true
		}
	]
  

	$scope.remove = function(ninja){
		var removeNinja = $scope.languages.indexOf(ninja);
		$scope.languages.splice(removeNinja, 1);
	}
	$scope.addProduct = function(){
		$scope.languages.push({
			name: $scope.new.name,
			belt: $scope.new.belt,
			cash: $scope.new.cash,
			available: true 
		});
		$scope.new = {};
	}
}]);