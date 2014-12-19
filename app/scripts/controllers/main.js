// 'use strict';
//
// /**
//  * @ngdoc function
//  * @name lorfrontendApp.controller:MainCtrl
//  * @description
//  * # MainCtrl
//  * Controller of the lorfrontendApp
//  */
// angular.module('lorfrontendApp')
//   .controller('MainCtrl', function ($scope, localStorageService) {
//
//     var todosInStore = localStorageService.get('todos');
//
//     $scope.todos = todosInStore || [];
//     // $scope.todos = [item1, item2, item3];
//
//     $scope.$watch('todos', function() {
//       localStorageService.add('todos', $scope.todos);
//     }, true);
//
//     $scope.addTodo = function () {
//       $scope.todos.push($scope.todo);
//       $scope.todo = '';
//     };
//
//     $scope.removeTodo = function(index) {
//       $scope.todos.splice(index, 1);
//     };
//   });


//////Code from github example

'use strict';

angular.module('mytodoApp')
.controller('MainCtrl', function ($scope, localStorageService) {

  var todosInStore = localStorageService.get('todos');

  $scope.todos = todosInStore || [];

  $scope.$watch('todos', function () {
    localStorageService.add('todos', $scope.todos);
  }, true);

  // Uncomment if you are disabling persistence
  //$scope.todos = [];

  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

});
