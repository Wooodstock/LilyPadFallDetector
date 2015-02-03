angular.module('LilyPadApp.Services', [])
.factory('bluetooth', [function() {

  //var bluetoothSerial = cordova.require('bluetoothSerial');

  return {
    sendMessage: function(message) {
      // interact with bluetoothSerial
    },
    connect: function(UIUD) {
      console.log('[bluetooth] - Connexion...')
      bluetoothSerial.connect(UIUD, function(){console.log('[bluetooth] - Connection Success')}, function(){console.log('[bluetooth] - Connection Failure')});
    },
    receiveMessage: function(success, failure){
      bluetoothSerial.subscribe('\n',  success, failure);
    }
  };


}]);
