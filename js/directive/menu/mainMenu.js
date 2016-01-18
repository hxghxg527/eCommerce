/**
 * Created by hxghxg527 on 16/1/19.
 */

'use strict';

angular.module('ec.directive.mainMenu', [])
    .directive('ecMainMenu', function () {
        return {
            restrict: 'C',
            link: function (scope, element, attr) {
                scope.$watch(function () {
                    return scope.activeIndex;
                }, function (activeIndex) {
                    $('.first-level-menu-li').removeClass('active');
                    if (activeIndex > -1) $('.first-level-menu-li').eq(activeIndex).addClass('active');
                });
            }
        };
    });