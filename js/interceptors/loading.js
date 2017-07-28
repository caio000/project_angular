myApp.factory('loading', function ($q, $rootScope, $timeout, $document) {
  return {
    request: function (config) {
      $document.find('#page').hide();
      return config;
    },
    requestError: function (rejection) {
      $document.find('#page').fadeIn(1000);
      return $q.reject(rejection);
    },
    response: function (response) {
      $timeout(function () {
        $document.find('#page').fadeIn(1000);
      },500);
      return response;
    },
    responseError: function (rejection) {
      $document.find('#page').fadeIn(1000);
      return $q.reject(rejection);
    }
  };
});
