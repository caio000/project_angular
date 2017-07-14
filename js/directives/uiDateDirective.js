myApp.directive('uiDate', function () {
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {

      // Função do evento ao soltar uma tecla
      element.bind('keyup',function () {

        var _formatDate = function (date) {
          date = date.replace(/[^0-9]+/g,"");
          if (date.length >= 2)
            date = date.substring(0,2) + '/' + date.substring(2);
          if (date.length >= 5)
            date = date.substring(0,5) + '/' + date.substring(5,9);

          return date;
        }

        var date = ctrl.$viewValue;
        ctrl.$setViewValue(_formatDate(date));
        ctrl.$render();
      });

      /* Essa função é executada após a função do evento, com o objetivo de
         transformar a data em string para um objeto do tipo Date.
      */
      ctrl.$parsers.push(function (value) {
        if (value.length == 10) {
          var dateArray = value.split('/');
          return new Date(dateArray[2], dateArray[1]-1, dateArray[0]);
        }
      });
    }
  };
});
