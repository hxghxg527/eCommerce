/**
 * Created by hxghxg527 on 16/2/2.
 */

'use strict';

angular.module('ec.controller.footerDescription', [])
    .controller('ecFooterDescriptionController', function ($scope, ecInteractionService, ecConstant) {
        ecInteractionService.getGuessLike(function (status, guessLike) {
            if (ecConstant.SUCCESS == status && guessLike) {
                //$scope.guessLike = guessLike.guessLike;
            }
        });
    });