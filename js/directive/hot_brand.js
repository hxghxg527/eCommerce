/**
 * Created by hxghxg527 on 16/1/24.
 */

'use strict';

angular.module('ec.directive.hotBrand', [])
    .directive('ecHotBrand', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/hotBrand.html',
            controller: 'ecHotBrandController',
            controllerAs: 'ecHotBrand',
            link: function (scope, element, attrs) {

            }
        };
    });