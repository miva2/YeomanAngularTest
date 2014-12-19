// 'use strict';
//
// /**
//  * @ngdoc overview
//  * @name lorfrontendApp
//  * @description
//  * # lorfrontendApp
//  *
//  * Main module of the application.
//  */
// angular
//   .module('lorfrontendApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch',
//     'ui.sortable'
//     'LocalStorageModule'
//   ])
//   .config(['localStorageServiceProvider', function(localStorageServiceProvider){
//     localStorageServiceProvider.setPrefix('ls');
//   }])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });


//////Code  from github example
'use strict';

angular.module('mytodoApp', [
'ngCookies',
'ngResource',
'ngSanitize',
'ngRoute',
'ui.sortable',
'LocalStorageModule'
])
.config(['localStorageServiceProvider', '$routeProvider', function(localStorageServiceProvider, $routeProvider){
  localStorageServiceProvider.setPrefix('ls');
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
