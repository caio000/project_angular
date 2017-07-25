var ui = angular.module('ui',[]);

ui.run(function ($templateCache) {
  $templateCache.put('view/accordion/accordion.html',`
    <div class="ui-accordion">
      <div class="ui-accordion-title text-center" ng-click="open()">
        <p>{{ title }}</p>
      </div>
      <div class="ui-accordion-body ui-hide">
        <p ng-transclude></p>
      </div>
    </div>
  `);
});

ui.directive('uiAccordions', function () {
  return {
    controller : function ($scope, $element, $attrs) {
      var accordions = [];

      this.addAccordion = function (accordion) {
        accordions.push(accordion);
      };

      this.closeAll = function () {
        accordions.forEach(function (accordion) {
          accordion.find('div .ui-accordion-body').hide('slow');
        });
      }
    }
  }
});

ui.directive('uiAccordion',function () {
  return {
    templateUrl: 'view/accordion/accordion.html',
    restrict: 'E',
    transclude: true,
    scope: {
      title: "@title",
    },
    require: "^uiAccordions",
    link: function (scope, element, attrs, ctrl) {
      ctrl.addAccordion(element);
      scope.open = function () {
        ctrl.closeAll();
        element.find('div .ui-accordion-body').show('slow');
      }
    }
  }
});
