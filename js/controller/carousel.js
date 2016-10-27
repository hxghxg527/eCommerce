/**
 * Created by hxghxg527 on 16/1/11.
 */

'use strict';

angular.module('ec.controller.carousel', [])
    .controller('ecCarouselController', function ($scope, ecInteractionService, ecConstant) {
        $scope.hasGotData = false;

        ecInteractionService.getMainCarousel(function (status, carousel) {
            if (ecConstant.SUCCESS == status && carousel) {
                $scope.carousel = carousel;
                $scope.hasGotData = true;
            }
        });
    });