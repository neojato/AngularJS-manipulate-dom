angular.module('ui.module', [])
  .controller('uiCtrl', ['$scope', function($scope) {
    'user strict';
    $scope.title = 'DOM manipulation with AngularJS';
    $scope.lightboxText = 'Some text that should be displayed in a lightbox';
  }]);