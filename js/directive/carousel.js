/**
 * Created by hxghxg527 on 16/1/19.
 */

'use strict';

angular.module('ec.directive.carousel', [])
    .directive('ecCarousel', function ($timeout) {
        return {
            restrict: 'EA',
            templateUrl: 'templates/carousel.html',
            replace: true,
            transclude: true,
            scope: {},
            controller: '',
            controllerAs: 'ecCarousel',
            link: function (scope, element, attrs) {
                var carouselEl = $(element),
                    contentContainerEl = carouselEl.find('.ec-carousel-outer-container'),
                    indicatorPoints = carouselEl.find('.ec-carousel-indicators-point'),
                    timer = null;

                indicatorPoints.bind('mouseenter', function () {
                    indicatorPoints.removeClass('selected');
                    $(this).addClass('selected');
                    var idx = $(this).index();

                    if (timer) {
                        $timeout.cancel(timer);
                        timer = null;
                    }
                    timer = $timeout(function () {
                        $timeout.cancel(timer);
                        timer = null;

                        contentContainerEl.stop(true).animate({
                            left: '-' + idx + '00%'
                        }, 'slow');
                    }, 1000);
                });

                scope.$destroy(function () {
                    contentContainerEl.stop();
                    if (timer) {
                        $timeout.cancel(timer);
                        timer = null;
                    }
                });
            }
        };
    });