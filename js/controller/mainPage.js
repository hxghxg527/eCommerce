/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ec.controller.mainPage', [])
    .controller('ecMainPageController', function ($rootScope) {

        try {
            $rootScope.currentUserInfo = JSON.parse(sessionStorage.getItem('currentUserInfo'));
            if ($rootScope.currentUserInfo) $rootScope.isLogin = true;
            else $rootScope.isLogin = false;
        } catch (e) {
            $rootScope.currentUserInfo = null;
            $rootScope.isLogin = false;
        }
    });