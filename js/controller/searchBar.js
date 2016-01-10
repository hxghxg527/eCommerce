/**
 * Created by hxghxg527 on 16/1/9.
 */

'use strict';

angular.module('ec.controller.searchBar', [])
    .controller('ecSearchBarController', function ($scope, ecInteractionService, ecConstant) {
        $scope.textValue = '';

        ecInteractionService.getSearchPlaceHolder(function (status, searchPlaceHolder) {
            console.log('nihao');
            var placeHolders = [];
            if (status == ecConstant.SUCCESS && searchPlaceHolder) {
                placeHolders = searchPlaceHolder.placeHolders || [];
            }
            sessionStorage.setItem('placeHolders', JSON.stringify(placeHolders));
            setRandomPlaceHolder(placeHolders);
        });

        function setRandomPlaceHolder(placeHolders) {
            $scope.placeHolder = '';
            var len = placeHolders.length;
            if (len > 0) $scope.placeHolder = placeHolders[Math.floor(Math.random() * len)];
        }

        ecInteractionService.getHotQueryWords(function (status, hotQueryWords) {
            $scope.hotQuery = [];
            if (status == ecConstant.SUCCESS && hotQueryWords) {
                $scope.hotQuery = hotQueryWords.hotQuery || [];
            }
            sessionStorage.setItem('hotQuery', JSON.stringify($scope.hotQuery));
        });
    });