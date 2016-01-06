/**
 * Created by hxghxg527 on 16/1/5.
 */

'use strict';

angular.module('ec.service.loginFilter', [])
    .factory('ecLoginFilterService', function ($rootScope, $location) {
        var loginFilter = {};

        loginFilter.judgeIsLogin = function () {
            if (!$rootScope.isLogin) {
                $location.path('login');
            }
        };

        return loginFilter;
    });