// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('lilypadFallDetect', ['ionic', 'LilyPadApp.Home', 'LilyPadApp.Services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    // var UIUD = "00:06:66:6D:95:38";
    // bluetoothSerial.connect(UIUD, function(){console.log('success')}, function(){console.log('error')});

  });
}).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });

});
