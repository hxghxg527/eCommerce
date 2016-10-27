/**
 * Created by hxghxg527 on 16/1/24.
 */

'use strict';

angular.module('ec.directive.featuredChannel', [])
    .directive('ecFeaturedChannel', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/featuredChannel.html',
            controller: 'ecFeaturedChannelController',
            controllerAs: 'ecFeaturedChannel',
            link: function (scope, element, attrs) {

            }
        };
    });