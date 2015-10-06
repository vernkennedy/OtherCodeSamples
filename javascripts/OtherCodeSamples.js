var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://raw.githubusercontent.com/vernkennedy/OtherCodeSamples/gh-pages/javascripts/OtherCodeSamples.json")
  .success(function (response) {$scope.names = response.records;});
});
 