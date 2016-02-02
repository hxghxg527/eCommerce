/**
 * Created by hxghxg527 on 16/2/2.
 */

'use strict';

angular.module('ec.directive.footerDescription', [])
    .directive('ecFooterDescription', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/footerDescription.html',
            controller: 'ecFooterDescriptionController',
            controllerAs: 'ecFooterDescription',
            link: function (scope, element, attrs) {

            }
        };
    });