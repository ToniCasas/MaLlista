angular.module('starter.controllers', [])

.controller('tabController', function ($scope, Translator) {
    $scope.T = function (token) {
        return Translator.getToken(token);
    }
})

.controller('DashCtrl', function ($scope, Translator) {
    $scope.T = function (token) {
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
  $scope.currentLanguage = Translator.getLanguage();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
