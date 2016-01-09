/**
 * Created by hxghxg527 on 16/1/2.
 */

'use strict';

angular.module('ec.controller.topBar', [])
    .controller('ecTopBarController', function ($scope, $rootScope, ecInteractionService, ecConstant, $timeout) {
        $scope.currentUserInfo = $rootScope.currentUserInfo;

        if ($rootScope.isLogin) {
            ecInteractionService.getShoppingCart(function (status, shoppingCart) {
                if (status == ecConstant.SUCCESS) {
                    if (shoppingCart && shoppingCart != 'undefined') {
                        $scope.shoppingCartGoods = shoppingCart.shoppingCartGoods;
                    } else $scope.shoppingCartGoods = [];
                }
            });
        } else $scope.shoppingCartGoods = [];

        var hasGoToGetWebSiteNavigation = false;
        $scope.getWebSiteNavigation = function () {
            if (hasGoToGetWebSiteNavigation) return;
            hasGoToGetWebSiteNavigation = true;
            $scope.showLoadingImg = true;
            ecInteractionService.getWebSiteNavigation(function (status, webSiteNavigation) {
                $timeout(function () {
                    $scope.showLoadingImg = false;
                    if (status == ecConstant.SUCCESS) {
                        if (webSiteNavigation && webSiteNavigation != 'undefined') {
                            $scope.webSites = webSiteNavigation.webSites;
                        } else $scope.webSites = [];
                    } else if (status == ecConstant.ERROR) {
                        hasGoToGetWebSiteNavigation = false;
                    }
                }, 500);
            });
        };
    });