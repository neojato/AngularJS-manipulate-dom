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
        scope.open = false;
        scope.toggle = function() {
          if(scope.open) {
            scope.open = false;
          } else {
            scope.open = true;
          }
        };
        parentCtrl.addItem(scope);
      },
      template: '<h2 data-ng-click="toggle()">{{title}}</h2><div class="accordionContent" data-ng-transclude data-ng-show="open"></div>'
    };
  });