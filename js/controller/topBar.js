/**
 * Created by hxghxg527 on 16/1/2.
 */

'use strict';

angular.module('ec.controller.topBar', [])
    .controller('ecTopBarController', function ($scope, $rootScope) {
        $scope.currentUserInfo = $rootScope.currentUserInfo;
    });