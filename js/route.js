/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ecRoute', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/mainPage');

        $stateProvider.state('mainPage', {
            url: '/mainPage',
            templateUrl: 'templates/mainPage.html',
            controller: 'ecMainPageController'
        }).state('mainPage.test', {
            url: '/test',
            templateUrl: 'templates/test.html'
        });
    })
    .run(function ($rootScope) {
        $rootScope.name = 'hello world';
    });