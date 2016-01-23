var app = angular.module('validationApp', []);

app.controller('valController', function($scope){
  var validateForm = function(){
    console.log('validator running');
    console.log(firstForm.$valid);
  };
});
