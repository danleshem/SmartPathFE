'use strict';
/**
 * @ngdoc function
 * @description
 * # MainCtrl
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position, $http) {

    //Default hour rate
    $scope.hour = 100

    $scope.submit = function() {

      var origins = $scope.origins
      var destinations = $scope.destinations
      var hour          = $scope.hour

      var form = {
                origins: origins,
                destinations: destinations,
                hour: hour
            }

      $http({
          headers: { 'ContentType': 'application/json' },
          method: 'POST',
          url: 'http://localhost:5000/api/v1.0/query',
          data: JSON.stringify(form)
      }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.show_results = true
            $scope.results = response.data.data
            console.log($scope.results)
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
           });

    }

    $scope.icons_map = {
        'driving': 'fa-car',
        'walking': 'fa-flag',
        'transit': 'fa-bus',
        'taxi':    'fa-taxi'
    }


  });
