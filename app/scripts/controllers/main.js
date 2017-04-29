'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('MainCtrl', function($rootScope, $scope, $location) {
        $scope.moreProds = function() {
            console.log("insidefunc")
            $location.path('/products')
        }

        $scope.sendEmail = function() {
            console.log("insidefunc", $scope.contact)
            $scope.reply = "Thanks for the message.We will get back to you";
            $scope.contact = "";
            // $location.path('/products')
        }

    });