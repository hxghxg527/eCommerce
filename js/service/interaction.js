/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ec.service.interaction', [])
    .factory('ecInteractionService', function ($http) {
        var interaction = {},
            AJAX_METHOD = {
                'GET': 'GET',
                'POST': 'POST'
            },
            AJAX_URL = {
                'USER_INFO': 'data/userInfo.json',
                'USER_LIST': 'data/userList.json',
                'SHOPPING_CART': 'data/shoppingCart.json',
                'WEB_SITE_NAVIGATION': 'data/webSiteNavigation.json'
            };

        interaction.getCurrentUserInfo = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.USER_INFO
            }).success(function (data, status, headers, config, statusText) {
                callBack(data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get userInfo.json failed.');
            });
        };

        interaction.getUserList = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.USER_LIST
            }).success(function (data, status, headers, config, statusText) {
                callBack(data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get userList.json failed.');
                callBack();
            });
        };

        interaction.getShoppingCart = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.SHOPPING_CART
            }).success(function (data, status, headers, config, statusText) {
                callBack(data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get shoppingCart.json failed.');
            });
        };

        interaction.getWebSiteNavigation = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.WEB_SITE_NAVIGATION
            }).success(function (data, status, headers, config, statusText) {
                callBack(data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get webSiteNavigation.json failed.');
            });
        };

        return interaction;
    });