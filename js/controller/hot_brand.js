/**
 * Created by hxghxg527 on 16/1/24.
 */

'use strict';

angular.module('ec.controller.hotBrand', [])
    .controller('ecHotBrandController', function ($scope, ecInteractionService, ecConstant, $timeout) {
        var timer;

        ecInteractionService.getHotBrand(function (status, hotBrand) {
            if (ecConstant.SUCCESS == status && hotBrand) {
                $scope.hotBrand = hotBrand.hotBrand;
                $scope.selectedIndex = 0;
                $scope.imageList = $scope.hotBrand.list[$scope.selectedIndex].imageList;
            }
        });

        $scope.changeBrand = function (idx) {
            if ($scope.selectedIndex == idx) return;
            $scope.selectedIndex = idx;
            $scope.imageList = [];
            if (timer) {
                $timeout.cancel(timer);
                timer = null;
            }
            timer = $timeout(function () {
                $scope.imageList = $scope.hotBrand.list[$scope.selectedIndex].imageList;
            }, 0);
        };

        $scope.$on('$destroy', function () {
            if (timer) {
                $timeout.cancel(timer);
                timer = null;
            }
        });
    });