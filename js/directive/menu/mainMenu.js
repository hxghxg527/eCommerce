/**
 * Created by hxghxg527 on 16/1/19.
 */

'use strict';

angular.module('ec.directive.mainMenu', [])
    .directive('ecMainMenu', function () {
        return {
            restrict: 'C',
            link: function (scope, element, attr) {
                scope.$watch('activeIndex', function (activeIndex) {
                    var liElement = $(element).find('.first-level-menu-li');
                    liElement.removeClass('active');
                    if (activeIndex > -1) liElement.eq(activeIndex).addClass('active');
                });
            }
        };
    });