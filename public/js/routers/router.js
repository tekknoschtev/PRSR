var app = angular.module('app');

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/testplans', {
        templateUrl: 'views/testplans/listall.html',
        controller: 'TestPlanCtrl'
      })
      .when('/testplans/plan/', {
        templateUrl: 'views/testplans/testplan.html',
        controller: 'TestPlanCtrl'
      })
      .when('/testplans/plan/:planId', {
        templateUrl: 'views/testplans/testplan.html',
        controller: 'TestPlanCtrl'
      })
      .when('/reports', {
        templateUrl: 'views/reporting/reports.html'
      })
      .when('/users', {
        templateUrl: 'views/users/users.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);