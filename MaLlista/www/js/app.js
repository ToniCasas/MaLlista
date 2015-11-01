// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'mallista.controllers', 'mallista.i18n'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  $stateProvider
    .state("settings", {
        url: "/settings",
        //templateUrl: "settings.html",
        templateUrl: "settings.html",
        controller: "settingsCtrl",
    })
    .state("tabs", {
        url: "/tab",
        abstract: true,
        templateUrl: "tabs.html",
    })
    .state("tabs.lists", {
        url: "/lists",
        views: {
            "lists-tab": {
                templateUrl: "lists.html",
                controller: "listsCtrl",
            }
        }
    })
    .state("tabs.pending", {
        url: "/pending",
        views: {
            "pending-tab": {
                templateUrl: "pending.html",
                controller: "pendingCtrl",
            }
        }
    })
    .state('tabs.products', {
        url: "/products",
        views: {
            'products-tab': {
                templateUrl: "products.html",
                controller: "productsCtrl",
            }
        }
    })
    .state('tabs.about', {
        url: "/about",
        views: {
            'about-tab': {
                templateUrl: "about.html"
            }
        }
    })
    .state('tabs.navstack', {
        url: "/navstack",
        views: {
            'about-tab': {
                templateUrl: "nav-stack.html"
            }
        }
    })
    .state('tabs.contact', {
        url: "/contact",
        views: {
            'contact-tab': {
                templateUrl: "contact.html"
            }
        }
    });


  $urlRouterProvider.otherwise("/tab/pending");
  $ionicConfigProvider.tabs.position("bottom");

})
//.controller('sideMenuCtrl', function ($scope, $rootScope, $ionicSideMenuDelegate, Translator) {
//    $scope = $rootScope;
//    $scope.showMenu = function () {
//        Translator.setCurrentLanguage('es');
//        $ionicSideMenuDelegate.toggleLeft();
//    };
//    //$scope.showRightMenu = function () {
//    //    $ionicSideMenuDelegate.toggleRight();
//    //};
//    $scope.t = function (token) {
//        return Translator.getToken(token);
//    }
//    $scope.hola = "hola comostamos bien y tu comostamos???";
//})
.controller('HomeTabCtrl', function ($scope, Translator) {
    $scope.t = function (token) {
        return Translator.getToken(token);
    }
    $scope.shoppingLists = ['Hola comostamos', 'Festa d\'en Pol', 'Lo que tengo que comprar para mi super casa y familia']
});