myApp.config(function ($routeProvider,$locationProvider) {

  $locationProvider.hashPrefix('');

  $routeProvider.when("/", {
    templateUrl: 'view/mainPage.html',
    controller: 'phoneListController',
    resolve: {
      contacts: function (contactsAPI) {
        return contactsAPI.getContacts();
      }
    }
  });
  $routeProvider.when("/novoContato",{
    templateUrl: "view/contact/newContact.html",
    controller: 'newContact',
    resolve: {
      phoneCompanies: function (CompanyAPI) {
        return CompanyAPI.getCompanies();
      }
    }
  });
  $routeProvider.when("/contato/detalhe/:id",{
    templateUrl: "view/contact/detail.html",
    controller: "contactDetail",
    resolve: {
      contact: function (contactsAPI, $route) {
        return contactsAPI.getContactById($route.current.params.id);
      }
    }
  });
  $routeProvider.otherwise({redirectTo: "/"});
});
