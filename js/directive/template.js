/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

//restrict: EACM
angular.module('ec.directive.template', [])
    .directive('ecTopBar', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/topBar.html',
            controller: 'ecTopBarController'
        };
    });