/**
 * Created by hxghxg527 on 16/1/3.
 */

'use strict';

angular.module('ecLoginController', [])
    .controller('ecLoginController', function ($scope, ecInteraction, $location) {
        $scope.username = '';
        $scope.password = '';
        var isClickLogin = false;

        $scope.loginAccount = function () {
            if ($scope.username.trim() == '') return;
            if ($scope.password.trim() == '') return;
            if (isClickLogin) return;
            isClickLogin = true;

            ecInteraction.getUserList(checkUser);
        };

        function checkUser(list) {
            if (list) {
                var userList = list.userList;
                angular.forEach(userList, function (item, index) {
                    //console.log(item);
                });
                $location.path('mainPage');
            } else isClickLogin = false;
        }
    });