angular.module('quizRT', ['ngRoute']).run(function($rootScope) {
.factory('socket', function ($rootScope) {
          var socket = io.connect('http://172.23.238.186:3000');
          return {
            on: function (eventName, callback) {

      $rootScope.stylesheetName = "index";

	})
            socket.on(eventName, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              callback.apply(socket, args);
            });
            });
            },

            emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
            var args = arguments;
            $rootScope.$apply(function () {
              if (callback) {
                callback.apply(socket, args);
              }
            });
            })
            }
          }})
        .config(function($routeProvider){

          $routeProvider

          .when('/quizPlayer',{
            'templateUrl': 'html/quizPlayer.html',
            'controller': 'quizPlayerController'
          })

          .when('/userProfile',{
            'templateUrl': 'html/userProfile.html',
            'controller': 'userProfileController'
          })

          .when('/categories',{
            'templateUrl': 'html/categories.html',
            'controller': 'categoriesController'
          })

          .when('/category/:categoryID',{
            'templateUrl': 'html/category.html',
            'controller': 'categoryController'

          })

          .when('/topic',{
            'templateUrl': 'html/topic.html',
            'controller': 'topicController'
          });
});
