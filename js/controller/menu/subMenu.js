/**
 * Created by hxghxg527 on 16/1/11.
 */

'use strict';

angular.module('ec.controller.subMenu', [])
    .controller('ecSubMenuController', function (ecInteractionService, ecConstant) {
        var self = this;

        ecInteractionService.getSubMenu(function (status, subMenu) {
            if (status == ecConstant.SUCCESS && subMenu) {
                self.subMenuList = subMenu.subMenuList || [];
            }
        });
    });