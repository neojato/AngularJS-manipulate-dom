angular.module('ui.directives', [])
  .directive('myLightbox', function() {
    'use strict';
    return {
      restrict: 'AEC',
      transclude: true,
      scope: {
        content: '=myLightbox'
      },
      templateUrl: 'scripts/directives/templates/lightbox.html'
    };
  });