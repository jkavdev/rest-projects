var App = angular.module('App', [
'ngRoute',
'controllers',
'services'
]);

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/fabricante/fabricante.html',
		controller: 'FabricanteCtrl'
	})
});

App.value('API', 'http://localhost:8083/locadora/service/');