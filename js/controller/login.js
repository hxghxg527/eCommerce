/**
 * Created by hxghxg527 on 16/1/3.
 */

'use strict';

angular.module('ec.controller.login', [])
    .controller('ecLoginController', function ($scope, ecInteractionService, ecConstant) {

        var ERROR_TIPS = {
                ALL_EMPTY: "请输入账户名和密码",
                PASSWORD_EMPTY: "请输入密码",
                ACCOUNT_EMPTY: "请输入账户名",
                LOGIN_FAILED: "账户名与密码不匹配，请重新输入",
                NETWORK_ERROR: "网络有问题，请检查网络"
            },
            BUTTON_CAPTION = {
                LOGIN: "登   录",
                LOGINING: "正在登录..."
            };

        var userName = '',
            password = '';

        (function () {
            var _userName = '';
            try {
                _userName = JSON.parse(localStorage.getItem('userName'));
            } catch (e) {

            }

            $scope.$emit('removeSessionStorageOfCurrentUserInfo');

            $scope.userName = _userName;
            $scope.password = '';
            $scope.errorTip = '';
            $scope.buttonCaption = BUTTON_CAPTION.LOGIN;

        })();

        $scope.loginAccount = function () {
            userName = $scope.userName.trim();
            password = $scope.password.trim();

            if ($scope.buttonCaption == BUTTON_CAPTION.LOGINING) return;

            if (userName == '' && password == '') {
                $scope.errorTip = ERROR_TIPS.ALL_EMPTY;
            } else if (userName == '' && password != '') {
                $scope.errorTip = ERROR_TIPS.ACCOUNT_EMPTY;
            } else if (userName != '' && password == '') {
                $scope.errorTip = ERROR_TIPS.PASSWORD_EMPTY;
            } else {
                $scope.errorTip = '';
                $scope.buttonCaption = BUTTON_CAPTION.LOGINING;
                ecInteractionService.getUserList(checkUser);
            }
        };

        function checkUser(status, list) {
            if (status == ecConstant.SUCCESS) {
                if (list) {
                    var userList = list.userList || [],
                        isAllCorrect = false,
                        userInfo = {};

                    angular.forEach(userList, function (item, index) {
                        if (item.userName == userName && item.password == password) {
                            isAllCorrect = true;
                            userInfo = item;
                            return;
                        }
                    });

                    if (isAllCorrect) {
                        $scope.$emit('loginSuccess', userInfo);
                    } else {
                        $scope.errorTip = ERROR_TIPS.LOGIN_FAILED;
                        $scope.buttonCaption = BUTTON_CAPTION.LOGIN;
                    }
                } else {
                    $scope.errorTip = ERROR_TIPS.LOGIN_FAILED;
                    $scope.buttonCaption = BUTTON_CAPTION.LOGIN;
                }
            } else if (status == ecConstant.ERROR) {
                $scope.errorTip = ERROR_TIPS.NETWORK_ERROR;
                $scope.buttonCaption = BUTTON_CAPTION.LOGIN;
            }
        }
    });