/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ecRoute', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('', '/mainPage')
            .otherwise('/mainPage');

        $stateProvider.state('mainPage', {
            url: '/mainPage',
            templateUrl: 'templates/mainPage.html',
            controller: 'ecMainPageController'
        }).state('mainPage.test1', {
            url: '/test1',
            templateUrl: 'templates/test1.html'
        }).state('mainPage.test2', {
            url: '/test2',
            templateUrl: 'templates/test2.html'
        }).state('test3', {
            url: '/test3',
            templateUrl: 'templates/test3.html'
        });

        // url 传递参数怎么接受处理路由
        // controller里如何接受url传的参数
    })
    .run(function ($rootScope) {
        $rootScope.name = 'run...';
    });