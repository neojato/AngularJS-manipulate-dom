angular.module('ui.directives', [])
  .directive('myLightbox', function() {
    'use strict';
    return {
      restrict: 'AEC',
      template: '<div class="lightbox"><p>{{lightboxText}}</p></div>'
    };
  });