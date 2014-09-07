angular.module('Rating', [])

	.controller('reviewController', function($scope){
		/*$scope.$route = $route;
	  $scope.$location = $location;
	  $scope.$routeParams = $routeParams;*/
	  $scope.showRating = true;
	  $scope.showAttributes = false;
	  $scope.showComment = false;
	  $scope.attributes = ['festligt', 'barnvänligt', 'prisvärt', 'romantiskt', 'stora sällskap', 'spontana besök'];

	  this.saveRating = function saveRating() {
		  $scope.showRating = false;
		  $scope.showAttributes = true;
		  $scope.showComment = false;
	  };

	  this.saveAttributes = function saveAttributes() {
		  $scope.showRating = false;
		  $scope.showAttributes = false;
		  $scope.showComment = true;
	  };
});