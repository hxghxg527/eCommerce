/**
 * Created by hxghxg527 on 16/1/24.
 */

'use strict';

angular.module('ec.directive.guessLike', [])
    .directive('ecGuessLike', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/guessLike.html',
            controller: 'ecGuessLikeController',
            controllerAs: 'ecGuessLike',
            link: function (scope, element, attrs) {

            }
        };
    });