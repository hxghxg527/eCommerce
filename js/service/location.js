/**
 * Created by hxghxg527 on 16/1/6.
 */

'use strict';

angular.module('ec.service.location', [])
    .factory('ecLocationService', function ($location) {
        var ecLocation = {};

        ecLocation.pathToMainPage = function () {
            $location.path('mainPage');
        };

        return ecLocation;
    });