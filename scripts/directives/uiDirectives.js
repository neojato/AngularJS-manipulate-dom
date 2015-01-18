angular.module('ui.directives', [])
  .directive('myLightbox', function() {
    'use strict';
    return {
      restrict: 'AEC',
      scope: {
        content: '=myContent'
      },
      template: '<div class="lightbox"><p>{{content.text}}</p><button data-ng-click="content.testFunc()">click me</button</div>'
    };
  });