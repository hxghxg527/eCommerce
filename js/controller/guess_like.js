/**
 * Created by hxghxg527 on 16/1/24.
 */

'use strict';

angular.module('ec.controller.guessLike', [])
    .controller('ecGuessLikeController', function ($scope, ecInteractionService, ecConstant) {
        ecInteractionService.getHotChannel(function (status, hotChannel) {
            if (ecConstant.SUCCESS == status && hotChannel) {
                //$scope.hotChannel = hotChannel.hotChannel;
            }
        });
    });