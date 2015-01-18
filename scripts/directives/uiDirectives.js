angular.module('ui.directives', [])
  .directive('myLightbox', function() {
    'use strict';
    return {
      restrict: 'AEC',
      scope: {
        contentText: '=myContent'
      },
      template: '<div class="lightbox"><p>{{contentText}}</p></div>'
    };
  });