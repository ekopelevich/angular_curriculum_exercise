var app = angular.module('digestApp', [])
  .controller('digestController', function($rootScope, $scope){
    $rootScope.name = "Fido";
    $scope.age = 3;
    setTimeout(function(){
      $rootScope.name = "Lassie";
      $scope.age = 10;
      // $scope.$digest()
      $scope.$apply();
    },1000);


});
