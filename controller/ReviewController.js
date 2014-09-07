angular.module('Rating', ['ngRoute'])

	.controller('reviewController', function($scope, $route, $routeParams, $location) {
		$scope.$route = $route;
	  $scope.$location = $location;
	  $scope.$routeParams = $routeParams;
	  $scope.attributes = ['festligt', 'barnvänligt', 'prisvärt', 'romantiskt', 'stora sällskap', 'spontana besök'];
 	})

 .controller('RatingController', function($scope, $routeParams) {
     $scope.name = "RatingController";
     $scope.params = $routeParams;
 })

 .controller('AttributesController', function($scope, $routeParams) {
     $scope.name = "AttributesController";
     $scope.params = $routeParams;
 })

 .controller('CommentController', function($scope, $routeParams) {
     $scope.name = "CommentController";
     $scope.params = $routeParams;
 })
	.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	  .when('/view/reviewView.html', {
	    templateUrl: 'averageModule.html',
	    controller: 'RatingController'
	  })
	  .when('/view/comment', {
	    templateUrl: 'commentModule.html',
	    controller: 'CommentController'
	  })
	   .when('/view/attributes', {
	    templateUrl: 'attributesModule.html',
	    controller: 'AttributesController'
	  });

	  $locationProvider.html5Mode(true);
});