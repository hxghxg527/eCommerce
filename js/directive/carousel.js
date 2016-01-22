/**
 * Created by hxghxg527 on 16/1/19.
 */

'use strict';

angular.module('ec.directive.carousel', [])
    .directive('ecCarousel', function ($timeout, $interval) {
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
                    timer1 = null,
                    timer2 = null,
                    interval = null,
                    canInterval = true,
                    currentIdx = 0,
                    totalNum = indicatorPoints.length;

                carouselEl.find('.ec-carousel-content-container').width('100%');
                contentContainerEl.width(totalNum * 100 + '%');
                carouselEl.find('.ec-carousel-inner-container').width(100 / totalNum + '%');


                interval = $interval(function () {
                    if (!canInterval) return;
                    currentIdx++;
                    if (currentIdx == totalNum) currentIdx = 0;
                    indicatorPoints.removeClass('selected').eq(currentIdx).addClass('selected');
                    contentContainerEl.stop(true).animate({
                        left: '-' + currentIdx + '00%'
                    }, 700);
                }, 5600, false);

                indicatorPoints.on('mouseenter', function () {
                    if (timer2) {
                        $timeout.cancel(timer2);
                        timer2 = null;
                    }
                    canInterval = false;
                    if (currentIdx == $(this).index()) return;
                    currentIdx = $(this).index();
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
                });

                indicatorPoints.on('mouseleave', function () {
                    if (timer2) {
                        $timeout.cancel(timer2);
                        timer2 = null;
                    }
                    timer2 = $timeout(function () {
                        $timeout.cancel(timer2);
                        timer2 = null;
                        canInterval = true;
                    }, 1400, false);
                });

                scope.$destroy(function () {
                    contentContainerEl.stop();
                    if (timer1) {
                        $timeout.cancel(timer1);
                        timer1 = null;
                    }
                    if (timer2) {
                        $timeout.cancel(timer2);
                        timer2 = null;
                    }
                    if (interval) {
                        $interval.cancel(interval);
                        interval = null;
                    }
                });
            }
        };
    });