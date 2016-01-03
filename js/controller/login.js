/**
 * Created by hxghxg527 on 16/1/3.
 */

'use strict';

angular.module('ecLoginController', [])
    .controller('ecLoginController', function ($scope) {
        $scope.username = '';
        $scope.password = '';

        $scope.loginAccount = function () {
            if ($scope.username.trim() == '') return;
            if ($scope.password.trim() == '') return;
        }
    });