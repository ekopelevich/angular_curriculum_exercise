var app = angular.module('eventsApp', []);

app.controller('EventsController', function($scope){
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
});

app.controller('ReverserController', function($scope){
  $scope.word = 'word';
  $scope.reverseWord = function(){
    var original = $scope.word;
    var reverse = '';
    for (var i = original.length - 1; i >= 0; i--) {
      reverse += original[i];
    }
    $scope.word = reverse;
  };
});

app.controller('PingPongController', function($scope){

  $scope.count = 0;


  function Player() {
    this.score = 0;
    this.serving = false;
    this.wins = 0;
    this.bgColor = '#008cff';
    this.incrementScore = function() {
      if (this.score < 11) {
        this.score++;
      }
    };
    this.incrementWins = function() {
      this.wins++;
    };
  }

  $scope.p1 = new Player();
  $scope.p2 = new Player();

  function switchServe(){
    if ($scope.p1.serving) {
      $scope.p2.serving = true;
      $scope.p1.serving = false;
    } else {
      $scope.p2.serving = false;
      $scope.p1.serving = true;
    }
  }

  $scope.setServe = function(){
    $scope.count++;
    if ($scope.count === 2) {
      $scope.count = 0;
      switchServe();
    }
  };

  $scope.checkEndGame = function(){
    if ($scope.p1.score === 11) {
      $scope.p1.bgColor = 'green';
      $scope.p2.bgColor = 'red';
      $scope.p1.incrementWins();
    } else if($scope.p2.score === 11) {
      $scope.p2.bgColor = 'green';
      $scope.p1.bgColor = 'red';
      $scope.p2.incrementWins();
    }
  };

  $scope.resetGame = function(){
    $scope.p1.score = 0;
    $scope.p2.score = 0;
    $scope.p1.serving = false;
    $scope.p2.serving = false;
    $scope.p1.bgColor = '#008cff';
    $scope.p2.bgColor = '#008cff';
    $scope.count = 0;
  };
});

app.controller('ColorChangeController', function($scope) {
  $scope.enterCount = 0;
  $scope.randomColor = '#ff00a5';

  $scope.enterCountFn = function(){
    $scope.enterCount++;
  };

  $scope.randomColorFn = function(){
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    $scope.randomColor = "#" + z1 + x;
  };
});

app.controller('ReplayColorsController', function($scope, $timeout) {
  $scope.randomColor = '#ff00a5';
  $scope.colorHistory = [];

  $scope.randomColorFn = function(){
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    $scope.randomColor = "#" + z1 + x;
    $scope.colorHistory.push($scope.randomColor);
  };

  $scope.replayColors = function() {
    console.log($scope.colorHistory);
    var replayCount;
    var replaying;
    var displayPrevColor = function(){
      $scope.randomColor = $scope.colorHistory.pop();
      // $scope.colorHistory.pop();
      replaying = false;
      $timeout(displayPrevColor, 2000);
    };
    if (!replaying) {
      replaying = true;
      $timeout(function(){
        displayPrevColor();
      }, 2000);
    }
  };
});
