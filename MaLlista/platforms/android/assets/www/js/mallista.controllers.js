angular.module('mallista.controllers', [])

    .controller('sideMenuCtrl', function ($scope, $rootScope, $ionicSideMenuDelegate, Translator) {
        $scope = $rootScope;
        $scope.showMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.t = function (token) {
            return Translator.getToken(token);
        }
    })
    .controller('pendingCtrl', function ($scope, Translator) {
        $scope.t = function (token) {
            return Translator.getToken(token);
        }
        $scope.shoppingLists = ['Hola comostamos', 'Festa d\'en Pol', 'Lo que tengo que comprar para mi super casa y familia']
    })
    .controller('listsCtrl', function ($scope, Translator) {
        $scope.t = function (token) {
            return Translator.getToken(token);
        }
    })
    .controller('productsCtrl', function ($scope, Translator) {
        $scope.t = function (token) {
            return Translator.getToken(token);
        }
    })
    .controller('settingsCtrl', function ($scope, $ionicHistory, Translator) {
        $scope.languageList = Translator.getLanguageList();
        $scope.t = function (token) {
            return Translator.getToken(token);
        }
        $scope.setCurrentLanguage = function (lan) {
            Translator.setCurrentLanguage(lan);
        }
        $scope.goBack = function () {
            $ionicHistory.backView();
        }
    })


;
