// $(document).ready(function(){
//   console.log('sanity check');
//   $('.name-submit').click(function(){
//     var name = $('.name').val();
//     $('.greeting').append(name);
//   });
// });

var app = angular.module('firstApp, ['$sanitize']');
app.controller('MyFirstController', function($scope){
  $scope.name = 'Severus Snape';
});
