/**
 * Created by hxghxg527 on 16/1/2.
 */

'use strict';

angular.module('ecTopBarController', [])
    .controller('ecTopBarController', function ($scope, $rootScope, ecInteraction) {
        $scope.currentUserInfo = {};

        ecInteraction.getCurrentUserInfo(initCurrentUserInfo);

        function initCurrentUserInfo(currentUserInfo) {
            if (currentUserInfo) {
                $scope.$emit('initCurrentUserInfo', currentUserInfo);
                $scope.currentUserInfo = $rootScope.currentUserInfo;
            }
        }
    });