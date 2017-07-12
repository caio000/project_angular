myApp.service('CompanyAPI', function ($http, Config) {

  this.getCompanies = function () {
    return $http.get(Config.baseURL + 'php/PhoneCompanies.php');
  };
});
