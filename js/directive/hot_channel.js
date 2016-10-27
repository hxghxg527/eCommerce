/**
 * Created by hxghxg527 on 16/1/24.
 */

'use strict';

angular.module('ec.directive.hotChannel', [])
    .directive('ecHotChannel', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/hotChannel.html',
            controller: 'ecHotChannelController',
            controllerAs: 'ecHotChannel',
            link: function (scope, element, attrs) {

            }
        };
    });