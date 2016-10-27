/**
 * Created by hxghxg527 on 16/1/24.
 */

'use strict';

angular.module('ec.controller.featuredChannel', [])
    .controller('ecFeaturedChannelController', function ($scope, ecInteractionService, ecConstant) {
        ecInteractionService.getFeaturedChannel(function (status, featuredChannel) {
            if (ecConstant.SUCCESS == status && featuredChannel) {
                $scope.featuredChannel = featuredChannel.featuredChannel;
            }
        });
    });