/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ec.controller.mainPage', [])
    .controller('ecMainPageController', function ($scope, $rootScope) {

        var tempInfo = sessionStorage.getItem('currentUserInfo');

        $rootScope.currentUserInfo = null;
        if (tempInfo && tempInfo != 'undefined') {
            $rootScope.currentUserInfo = JSON.parse(tempInfo);
        }

        if (!$rootScope.currentUserInfo || !$rootScope.currentUserInfo.isLogin) {
            $rootScope.isLogin = false;
        } else {
            $rootScope.isLogin = true;
        }
    });