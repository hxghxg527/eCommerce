/**
 * Created by hxghxg527 on 16/1/9.
 */

'use strict';

angular.module('ec.controller.searchBar', [])
    .controller('ecSearchBarController', function ($scope, ecInteractionService, ecConstant) {
        $scope.textValue = '';

        ecInteractionService.getHotQueryWords(function (status, hotQueryWords) {
            if (status == ecConstant.SUCCESS) {
                if (hotQueryWords && hotQueryWords != 'undefined') {
                    $scope.hotQuery = hotQueryWords.hotQuery;
                } else $scope.hotQuery = [];
            }
        });

        ecInteractionService.getSearchPlaceHolder(function (status, searchPlaceHolder) {
            if (status == ecConstant.SUCCESS) {
                var placeHolders = [];
                if (searchPlaceHolder && searchPlaceHolder != 'undefined') {
                    placeHolders = searchPlaceHolder.placeHolders;
                }
                setRandomPlaceHolder(placeHolders);
            }
        });

        function setRandomPlaceHolder(placeHolders) {
            $scope.placeHolder = '';
            var len = placeHolders.length;
            if (len > 0) $scope.placeHolder = placeHolders[Math.floor(Math.random() * len)];
        }
    });