var app = angular.module('validationApp', []);

app.controller('ValidationController', function($scope){
  $scope.validateForm = function(){
    console.log(firstForm.firstname.$dirty);
    console.log(firstForm.firstname.$dirty);
    console.log(firstForm.$valid);
  };
});
