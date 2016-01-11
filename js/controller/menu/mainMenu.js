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
    });