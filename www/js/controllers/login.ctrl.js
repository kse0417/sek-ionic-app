angular.module("starter.login.ctrl", ["starter.login.service"])
  .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = [];
    $scope.login = function() {
      console.log("LOGIN user: " + $scope.data.username + " password: " + $scope.data.password);
      LoginService.loginUser($scope.data.username, $scope.data.password)
        .success(function(data) {
          $state.go("home");
        })
        .error(function(data) {
          var alertPopup = $ionicPopup.alert({
            title: 'Login Failed',
            template: 'Please check your credentails'
          });
        });
    };
  });

