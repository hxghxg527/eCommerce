/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ecMainController', [])
    .controller('ecMainController', function ($rootScope, $scope) {
        $scope.$on('initCurrentUserInfo', function (evt, currentUserInfo) {
            $rootScope.currentUserInfo = currentUserInfo;
        });
    });