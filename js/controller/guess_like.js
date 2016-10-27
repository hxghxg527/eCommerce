/**
 * Created by hxghxg527 on 16/1/24.
 */

'use strict';

angular.module('ec.controller.guessLike', [])
    .controller('ecGuessLikeController', function ($scope, ecInteractionService, ecConstant) {
        ecInteractionService.getGuessLike(function (status, guessLike) {
            if (ecConstant.SUCCESS == status && guessLike) {
                $scope.guessLike = guessLike.guessLike;
            }
        });
    });