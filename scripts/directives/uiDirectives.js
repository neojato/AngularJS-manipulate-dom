angular.module('ui.directives', [])
  .directive('myLightbox', function() {
    'use strict';
    return {
      restrict: 'AEC',
      transclude: true,
      scope: {
        content: '=myContent'
      },
      template: '<div class="background" data-ng-show="content.visible"></div><div class="lightbox" data-ng-show="content.visible"><button data-ng-click="content.toggleView()">close</button><div data-ng-transclude></div></div>'
    };
  });