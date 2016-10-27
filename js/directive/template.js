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
    })
    .directive('ecSearchBar', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/searchBar.html',
            controller: 'ecSearchBarController'
        };
    })
    .directive('ecMenu', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/menu/menu.html'
        };
    })
    .directive('ecMainMenu', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/menu/mainMenu.html',
            controller: 'ecMainMenuController',
            controllerAs: 'ecMainMenu'
        };
    })
    .directive('ecSubMenu', function () {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/menu/subMenu.html',
            controller: 'ecSubMenuController',
            controllerAs: 'ecSubMenu'
        };
    });