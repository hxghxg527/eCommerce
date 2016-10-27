/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ec.controller.main', [])
    .run(function ($rootScope) {
        $rootScope.appName = '鲸鲨网上购物商城';
        $rootScope.logoName = "鲸鲨";
        $rootScope.appVersion = 'V1.0';

        $rootScope.isLogin = false;
    })
    .controller('ecMainController', function ($scope, ecLocationService) {

        $scope.$on('loginSuccess', function (evt, userInfo) {
            var currentUserInfo = {
                userName: userInfo.userName,
                email: userInfo.email,
                telphone: userInfo.telphone,
                balance: userInfo.balance,
                grade: userInfo.grade,
                points: userInfo.points,
                messageNum: userInfo.messageNum,
                sex: userInfo.sex
            };
            localStorage.setItem('userName', JSON.stringify(userInfo.userName));
            sessionStorage.setItem('currentUserInfo', JSON.stringify(currentUserInfo));
            ecLocationService.pathToMainPage();
        });

        $scope.$on('setSessionStorageOfCurrentUserInfo', function (evt, currentUserInfo) {
            sessionStorage.setItem('currentUserInfo', JSON.stringify(currentUserInfo));
        });

        $scope.$on('removeSessionStorageOfCurrentUserInfo', function () {
            sessionStorage.removeItem('currentUserInfo');
        });

        $scope.$on('setSessionStorageOfPlaceHolders', function (evt, placeHolders) {
            sessionStorage.setItem('placeHolders', JSON.stringify(placeHolders));
        });

        $scope.$on('setSessionStorageOfHotQuery', function (evt, hotQuery) {
            sessionStorage.setItem('hotQuery', JSON.stringify(hotQuery));
        });
    });