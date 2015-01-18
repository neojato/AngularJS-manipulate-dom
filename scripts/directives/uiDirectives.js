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
  })
  .directive('myAccordion', function() {
    'use strict';
    return {
      restrict: 'AEC',
      transclude: true,
      template: '<div class="accordion" data-ng-transclude></div>',
      controller: function($scope, $element) {
        this.items = [];
        this.addItem = function(item) {
          this.items.push(item);
        };
      }
    };
  })
  .directive('myItem', function() {
    'use strict';
    return {
      restrict: 'AEC',
      require: '^myAccordion',
      transclude: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, parentCtrl) {
        // code here will run when the directive is called
      },
      template: '<h2>{{title}}</h2><div class="accordionContent" data-ng-transclude></div>'
    };
  });