/**
 * Created by hxghxg527 on 16/1/19.
 */

'use strict';

angular.module('ec.directive.carousel', [])
    .directive('ecCarousel', function () {
        return {
            restrict: 'EA',
            templateUrl: 'templates/carousel.html',
            replace: true,
            transclude: true,
            scope: {},
            controller: '',
            controllerAs: 'ecCarousel',
            link: function (scope, element, attrs) {

            }
        };
    });