/**
 * Created by hxghxg527 on 16/1/1.
 */

'use strict';

angular.module('ecInteraction', [])
    .factory('ecInteraction', function ($rootScope, $http) {
        var interaction = {},
            AJAX_METHOD = {
                'GET': 'GET',
                'POST': 'POST'
            },
            AJAX_URL = {
                'USER_INFO': 'data/userInfo.json',
                'USER_LIST': 'data/userList.json'
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

        return interaction;
    });