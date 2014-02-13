var app = angular.module('app');

app.controller('IndexCtrl', function($scope, $location) {
  $scope.title = "Index Controller";
  
  $scope.isActive = function(item) {
    var rootLocation = $location.path().split('/');
    
    if( item == '/' + rootLocation[1]) {
      return true;
    }
    return false;
  };
});