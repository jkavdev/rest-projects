App.controller('FabricanteCtrl', function($scope, FabricanteService, $route,
		$routeParams, $location, EnvioService) {
	$scope.fabricantes = [];

	$scope.notFound = false;
	FabricanteService.list().then(function(data) {
		$scope.fabricantes = data.data;
		if (data.data.length == 0) {
			$scope.notFound = true;
		}
	}, function(data) {
		console.log("data", data);
	});

});