angular.module('Rating', [])

	.controller('reviewController', function($scope){
	  $scope.restaurant_id = 16844;
	  $scope.showRating = true;
	  $scope.showAttributes = false;
	  $scope.showComment = false;
	  $scope.rating;
	  $scope.given_attributes = [false, false, false, false, false, false];
	  $scope.comment;
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
	  this.saveReview = function saveReview() {

	  }
});