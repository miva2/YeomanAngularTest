'use strict';

/**
 * @ngdoc function
 * @name lorfrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lorfrontendApp
 */
angular.module('lorfrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
