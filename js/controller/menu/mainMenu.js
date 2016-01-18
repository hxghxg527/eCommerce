/**
 * Created by hxghxg527 on 16/1/11.
 */

'use strict';

angular.module('ec.controller.mainMenu', [])
    .controller('ecMainMenuController', function ($scope, ecInteractionService, ecConstant) {
        var self = this;

        ecInteractionService.getMainMenu(function (status, mainMenu) {
            if (status == ecConstant.SUCCESS && mainMenu) {
                self.mainMenuList = mainMenu.mainMenuList || [];
            }
        });

        $scope.changeMenuModel = function (idx) {
            $scope.menu = self.mainMenuList[idx];
            $scope.activeIndex = idx;
        };

        $scope.leave = function () {
            $scope.menu = null;
            $scope.activeIndex = -1;
        };

        $scope.$watch(function () {
            return $scope.activeIndex;
        }, function (activeIndex) {
            $('.first-level-menu-li').removeClass('active');
            if (activeIndex > -1) $('.first-level-menu-li').eq(activeIndex).addClass('active');
        });
    });