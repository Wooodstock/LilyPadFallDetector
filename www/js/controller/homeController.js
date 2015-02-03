angular.module('LilyPadApp.Home', []).

controller('HomeCtrl', ['$scope', 'bluetooth', '$ionicPlatform', function ($scope, bluetooth, $ionicPlatform) {
  console.log("[HomeCtrl] - Init");
  $scope.btIn = "Init";

  $ionicPlatform.ready(function() {
    bluetooth.receiveMessage(function success(data){
      console.log(data)
      $scope.$apply(function () {
        $scope.btIn = $scope.btIn + data;
      });
      
  }, function failure(){console.log("Error Receiving Data")});

  });


}]).run(function($ionicPlatform,bluetooth) {

  $ionicPlatform.ready(function() {
    var UIUD = "00:06:66:6D:95:38";
    bluetooth.connect(UIUD);
  });

});
