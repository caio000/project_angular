myApp.factory('error',function ($q, $location) {
  return {
    responseError: function (rejection) {
      // verica se o erro retornado é o erro 404
      if (rejection.status == 404) $location.path('/error');
      return $q.reject(rejection);
    }
  };
});
