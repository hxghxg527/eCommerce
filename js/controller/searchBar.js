/**
 * Created by hxghxg527 on 16/1/9.
 */

'use strict';

angular.module('ec.controller.searchBar', [])
    .controller('ecSearchBarController', function ($scope, ecInteractionService, ecConstant) {
        $scope.textValue = '';

        try {
            setRandomPlaceHolder(JSON.parse(sessionStorage.getItem('placeHolders')));
        } catch (e) {
            ecInteractionService.getSearchPlaceHolder(function (status, searchPlaceHolder) {
                var placeHolders = [];
                if (status == ecConstant.SUCCESS && searchPlaceHolder) {
                    placeHolders = searchPlaceHolder.placeHolders || [];
                }
                $scope.$emit('setSessionStorageOfPlaceHolders', placeHolders);
                setRandomPlaceHolder(placeHolders);
            });
        }

        function setRandomPlaceHolder(placeHolders) {
            $scope.placeHolder = '';
            var len = placeHolders.length;
            if (len > 0) $scope.placeHolder = placeHolders[Math.floor(Math.random() * len)];
        }

        try {
            $scope.hotQuery = JSON.parse(sessionStorage.getItem('hotQuery'));
            if (!$scope.hotQuery) getHotQueryWords();
        } catch (e) {
            getHotQueryWords();
        }

        function getHotQueryWords() {
            ecInteractionService.getHotQueryWords(function (status, hotQueryWords) {
                $scope.hotQuery = [];
                if (status == ecConstant.SUCCESS && hotQueryWords) {
                    $scope.hotQuery = hotQueryWords.hotQuery || [];
                }
                $scope.$emit('setSessionStorageOfHotQuery', $scope.hotQuery);
            });
        }
    });