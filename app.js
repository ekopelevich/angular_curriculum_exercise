var app = angular.module('firstApp', []);
app.controller('MyFirstController', function($scope){
  $scope.name = 'Severus Snape';
});

app.controller('ExerciseController', function($scope){
  $scope.favColor = 'blue';
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
  $scope.rightNow = Date.now();
});
