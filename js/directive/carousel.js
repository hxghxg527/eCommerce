/**
 * Created by hxghxg527 on 16/1/19.
 */

'use strict';

angular.module('ec.directive.carousel', [])
    .directive('ecCarousel', function ($timeout, $interval) {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'templates/carousel.html',
            controller: 'ecCarouselController',
            controllerAs: 'ecCarousel',
            link: function (scope, element, attrs) {
                var carouselEl = $(element),
                    contentContainerEl = carouselEl.find('.ec-carousel-outer-container'),
                    timer1 = null,
                    timer2 = null,
                    timer3 = null,
                    interval1 = null,
                    canInterval = true,
                    currentIdx = 0;

                scope.$watch('hasGotData', function (hasGotData) {
                    if (!hasGotData) return;
                    executeCarousel();
                });

                function executeCarousel() {
                    var totalNum = scope.carousel.carouselData.length,
                        indicatorPoints = carouselEl.find('.ec-carousel-indicators-point');

                    carouselEl.find('.ec-carousel-content-container').width(scope.carousel.width).height(scope.carousel.height);
                    contentContainerEl.width(totalNum * 100 + '%');
                    carouselEl.find('.ec-carousel-inner-container').width(100 / totalNum + '%');

                    interval1 = $interval(function () {
                        if (!canInterval) return;
                        currentIdx++;
                        if (currentIdx == totalNum) currentIdx = 0;
                        indicatorPoints.removeClass('selected').eq(currentIdx).addClass('selected');
                        contentContainerEl.stop(true).animate({
                            left: '-' + currentIdx + '00%'
                        }, 600);
                    }, 8600, false);

                    indicatorPoints.on('mouseenter', function () {
                        var self = this;
                        canInterval = false;
                        timer3 = $timeout(function () {
                            if (timer2) {
                                $timeout.cancel(timer2);
                                timer2 = null;
                            }
                            if (timer3) {
                                $timeout.cancel(timer3);
                                timer3 = null;
                            }
                            if (currentIdx == $(self).index()) return;
                            currentIdx = $(self).index();
                            indicatorPoints.removeClass('selected').eq(currentIdx).addClass('selected');

                            if (timer1) {
                                $timeout.cancel(timer1);
                                timer1 = null;
                            }
                            timer1 = $timeout(function () {
                                $timeout.cancel(timer1);
                                timer1 = null;
                                contentContainerEl.stop(true).animate({
                                    left: '-' + currentIdx + '00%'
                                }, 'slow');
                            }, 800, false);
                        }, 300, false);
                    });

                    indicatorPoints.on('mouseleave', function () {
                        if (timer2) {
                            $timeout.cancel(timer2);
                            timer2 = null;
                        }
                        if (timer3) {
                            $timeout.cancel(timer3);
                            timer3 = null;
                            canInterval = true;
                        } else {
                            timer2 = $timeout(function () {
                                $timeout.cancel(timer2);
                                timer2 = null;
                                canInterval = true;
                            }, 1700, false);
                        }
                    });
                }

                scope.$on('$destroy', function () {
                    contentContainerEl.stop();
                    if (timer1) {
                        $timeout.cancel(timer1);
                        timer1 = null;
                    }
                    if (timer2) {
                        $timeout.cancel(timer2);
                        timer2 = null;
                    }
                    if (timer3) {
                        $timeout.cancel(timer3);
                        timer3 = null;
                    }
                    if (interval1) {
                        $interval.cancel(interval1);
                        interval1 = null;
                    }
                });
            }
        };
    });