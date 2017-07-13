myApp.directive('uiAlert', function () {
  return {
    templateUrl: 'view/alert/alert.html',
    replace: true,
    restrict: "AE",
    scope: {
      title:    '@title',
      message:  '@message'
    }
  };
});
