/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ecTemplate', [])
    .directive('ecMainPage', function () {
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            templateUrl: 'templates/mainPage.html',
            controller: ''
        };
    }).directive('ecTopBar', function () {
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            templateUrl: 'templates/topBar.html',
            controller: ''
        };
    });