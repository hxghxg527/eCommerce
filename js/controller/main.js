/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ecMainController', [])
    .run(function ($rootScope) {
        $rootScope.appName = '蓝鲸网上购物商城';
        $rootScope.logoName = "蓝鲸";
        $rootScope.appVersion = 'V1.0';
        $rootScope.isLogin = true;
    })
    .controller('ecMainController', function ($rootScope, $scope) {
        $scope.$on('initCurrentUserInfo', function (evt, currentUserInfo) {
            $rootScope.currentUserInfo = {
                userName: currentUserInfo.userName,
                password: currentUserInfo.password,
                balance: currentUserInfo.balance,
                grade: currentUserInfo.grade,
                points: currentUserInfo.points,
                messageNum: currentUserInfo.messageNum
            };
        });
    });