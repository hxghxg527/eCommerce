/**
 * Created by hxghxg527 on 16/1/11.
 */

'use strict';

angular.module('ec.controller.subMenu', [])
    .controller('ecSubMenuController', function ($scope, ecInteractionService, ecConstant) {
        ecInteractionService.getSubMenu(function (status, subMenu) {
            if (status == ecConstant.SUCCESS && subMenu) {
                this.subMenuList = subMenu.subMenuList || [];
            }
        });
    });