var app = angular.module('eventsApp', []);

app.controller('EventsController', function($scope){
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
});

app.controller('ReverserController', function($scope){
  $scope.word = 'word';
  $scope.reverseWord = function($scope){
    var reverse = [];
    for (var i = 0; i < $scope.word.length; i++) {
      reverse.push($scope.word[i]);
    }
    $scope.word = reverse;
  };
});

app.controller('PingPongController', function($scope){
  var score = 0;
  $scope.p1 = p1;
  $scope.p2 = p2;
  p1.score = score;
  p2.score = score;
  $scope.incrementScore = function(){
    score++;
    console.log(score);
    this.score =score;
  };
  $scope.serving = false;
  $scope.resetGame = function($scope){
    $scope.score = 0;
    // $scope.p2.score = 0;
  };
});
