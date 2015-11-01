angular.module('starter.controllers', [])

.controller('tabController', function ($scope, Translator) {
    $scope.t = function (token) {
        return Translator.getToken(token);
    }
})

    /**************** MaLlista **************************/
    .controller('indexCtrl', function ($scope, Translator, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
    .controller('pendingCtrl', function ($scope, Translator, $ionicSideMenuDelegate) {
        $scope.t = function (token) {
            return Translator.getToken(token);
        }
        $scope.shoppingLists = ['Hola comostamos', 'Festa d\'en Pol', 'Lo que tengo que comprar para mi super casa y familia']
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
    /**************** MaLlista **************************/


.controller('DashCtrl', function ($scope, Translator) {
    $scope.t = function (token) {
        return Translator.getToken(token);
    }
})

.controller('ChatsCtrl', function($scope, Chats, Translator) {
  $scope.chats = Chats.all();
  $scope.remove = function (chat) {
      Chats.remove(chat);
  }
  $scope.t = function (token) {
      return Translator.getToken(token);
  }
  //$scope.currentLanguage = Translator.getCurrentLanguage();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
