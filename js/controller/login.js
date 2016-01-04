/**
 * Created by hxghxg527 on 16/1/3.
 */

'use strict';

angular.module('ec.controller.login', [])
    .controller('ecLoginController', function ($scope, ecInteractionService, $location) {
        $scope.userName = '';
        $scope.password = '';
        var isClickLogin = false;

        $scope.loginAccount = function () {
            if ($scope.userName.trim() == '') return;
            if ($scope.password.trim() == '') return;
            if (isClickLogin) return;
            isClickLogin = true;

            ecInteractionService.getUserList(checkUser);
        };

        function checkUser(list) {
            if (list) {
                var userList = list.userList;
                angular.forEach(userList, function (item, index) {
                    if (item.userName == $scope.userName.trim() && item.password == $scope.password.trim()) {
                        $location.path('mainPage');
                        return;
                    } else {
                        isClickLogin = false;
                    }
                });

            } else isClickLogin = false;
        }
    });