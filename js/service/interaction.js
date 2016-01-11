/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ec.service.interaction', [])
    .factory('ecInteractionService', function ($http, ecConstant) {
        var interaction = {},
            AJAX_METHOD = {
                'GET': 'GET',
                'POST': 'POST'
            },
            AJAX_URL = {
                'USER_INFO': 'data/userInfo.json',
                'USER_LIST': 'data/userList.json',
                'SHOPPING_CART': 'data/shoppingCart.json',
                'WEB_SITE_NAVIGATION': 'data/webSiteNavigation.json',
                'HOT_QUERY_WORDS': 'data/hotQueryWords.json',
                'SEARCH_PLACEHOLDER': 'data/searchPlaceHolder.json',
                'MAIN_MENU': 'data/mainMenu.json',
                'SUB_MENU': 'data/subMenu.json'
            };

        interaction.getCurrentUserInfo = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.USER_INFO
            }).success(function (data, status, headers, config, statusText) {
                callBack(ecConstant.SUCCESS, data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get userInfo.json failed.');
            });
        };

        interaction.getUserList = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.USER_LIST
            }).success(function (data, status, headers, config, statusText) {
                callBack(ecConstant.SUCCESS, data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get userList.json failed.');
                callBack(ecConstant.ERROR);
            });
        };

        interaction.getShoppingCart = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.SHOPPING_CART
            }).success(function (data, status, headers, config, statusText) {
                callBack(ecConstant.SUCCESS, data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get shoppingCart.json failed.');
            });
        };

        interaction.getWebSiteNavigation = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.WEB_SITE_NAVIGATION
            }).success(function (data, status, headers, config, statusText) {
                callBack(ecConstant.SUCCESS, data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get webSiteNavigation.json failed.');
                callBack(ecConstant.ERROR);
            });
        };

        interaction.getHotQueryWords = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.HOT_QUERY_WORDS
            }).success(function (data, status, headers, config, statusText) {
                callBack(ecConstant.SUCCESS, data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get hotQueryWords.json failed.');
                callBack(ecConstant.ERROR);
            });
        };

        interaction.getSearchPlaceHolder = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.SEARCH_PLACEHOLDER
            }).success(function (data, status, headers, config, statusText) {
                callBack(ecConstant.SUCCESS, data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get searchPlaceHolder.json failed.');
                callBack(ecConstant.ERROR);
            });
        };

        interaction.getMainMenu = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.MAIN_MENU
            }).success(function (data, status, headers, config, statusText) {
                callBack(ecConstant.SUCCESS, data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get mainMenu.json failed.');
            });
        };

        interaction.getSubMenu = function (callBack) {
            $http({
                'method': AJAX_METHOD.GET,
                'url': AJAX_URL.SUB_MENU
            }).success(function (data, status, headers, config, statusText) {
                callBack(ecConstant.SUCCESS, data);
            }).error(function (data, status, headers, config, statusText) {
                console.log('Get subMenu.json failed.');
            });
        };

        return interaction;
    });