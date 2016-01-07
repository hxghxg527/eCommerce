/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ec.controller.mainPage', [])
    .controller('ecMainPageController', function ($scope, $rootScope) {

        var tempInfo = sessionStorage.getItem('currentUserInfo');

        if (tempInfo && tempInfo != 'undefined') {
            $rootScope.currentUserInfo = JSON.parse(tempInfo);
            $rootScope.isLogin = true;
        } else {
            $rootScope.currentUserInfo = null;
            $rootScope.isLogin = false;
        }
    });