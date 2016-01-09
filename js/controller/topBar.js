/**
 * Created by hxghxg527 on 16/1/2.
 */

'use strict';

angular.module('ec.controller.topBar', [])
    .controller('ecTopBarController', function ($scope, $rootScope, ecInteractionService, $timeout) {
        $scope.currentUserInfo = $rootScope.currentUserInfo;


        if ($rootScope.isLogin) {
            ecInteractionService.getShoppingCart(function (shoppingCart) {
                $timeout(function () {
                    if (shoppingCart && shoppingCart != 'undefined') {
                        $scope.shoppingCartGoods = shoppingCart.shoppingCartGoods;
                    } else $scope.shoppingCartGoods = [];
                }, 1000);
            });
        } else $scope.shoppingCartGoods = [];
    });