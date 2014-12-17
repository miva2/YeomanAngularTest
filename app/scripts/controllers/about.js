'use strict';

/**
 * @ngdoc function
 * @name lorfrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lorfrontendApp
 */
angular.module('lorfrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
