angular.module("starter.login.service", [])
.service('LoginService', function($q) {
  return {
    loginUser: function(username, password) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      
      //Fake authentication
      //TODO: change this to True security
      if (username == "kse0417" && password == "password") {
        deferred.resolve("Login successful");
      } else {
        deferred.reject("Login failed. Invalid credentials");
      }

      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }
}) 
