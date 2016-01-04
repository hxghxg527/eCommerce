/**
 * Created by hxghxg527 on 16/1/2.
 */

'use strict';

angular.module('ec.controller.topBar', [])
    .controller('ecTopBarController', function ($scope, $rootScope, ecInteractionService) {
        $scope.currentUserInfo = {};

        ecInteractionService.getCurrentUserInfo(initCurrentUserInfo);

        function initCurrentUserInfo(currentUserInfo) {
            if (currentUserInfo) {
                $scope.$emit('initCurrentUserInfo', currentUserInfo);
                $scope.currentUserInfo = $rootScope.currentUserInfo;
            }
        }
    });