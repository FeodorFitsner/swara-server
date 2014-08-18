'use strict';

angular.module('library').controller('LibraryController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    $scope.authentication = Authentication;

  }
]);