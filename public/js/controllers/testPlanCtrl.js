var app = angular.module('app');

app.controller('TestPlanCtrl', function($scope, $http, $routeParams, $location, TestPlanFactory) {
  
  var planId = $routeParams.planId;
  
  $scope.content = 'Test';
  
  if(planId) {
//    $scope.testPlan = TestPlanFactory.getPlanById(planId);
    TestPlanFactory.getPlanById(planId).success(function(response) {
      $scope.testPlan = response.plan;
    });
    $scope.mode = 'view';
  }
  else if (!planId) {
    $scope.testPlan = TestPlanFactory.getNewPlan();
    $scope.mode = 'edit';
  }
  
  if($location.$$path == '/testplans') {
    TestPlanFactory.getAllPlans().success(function(response) {
      console.log(response);
      $scope.testPlans = response.testplans;
    })
  }
  
  
  
  $scope.setMode = function(mode) {
    if(!planId) {
      $scope.mode = 'edit'
    }
    else {
      $scope.mode = mode;
    }
  };
  
  $scope.savePlan = function() {
    TestPlanFactory.updateTestPlan($scope.testPlan);
    $location.path('testplans/plan/' + $scope.testPlan.details.extrnId);
    $scope.mode = 'view';
  };
  
  $scope.exportJson = function() {
    console.log(JSON.stringify($scope.testPlan));
  }
});