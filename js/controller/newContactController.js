myApp.controller('newContact',function ($scope, phoneCompanies, contactsAPI, SerialGenerator) {

  $scope.contactReg = false;
  $scope.phoneCompanies = phoneCompanies.data;


  // Carrega todas as operadoras caradastradas
  var loadPhoneCompanies = function () {
    CompanyAPI.getCompanies().then(function success (response) {
      $scope.phoneCompanies = response.data;
    });
  };

  // Função que cadastra um novo contato
  $scope.contactRegister = function (contact) {
    contact.serial = SerialGenerator.generate();
    contactsAPI.saveContact(contact).then(function success(response) {
      $scope.contactReg = true;
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      angular.element(document).find('#form-alert').fadeIn(1000);
    }, function error (response) {
      $scope.contactReg = false;
    });
  };

  // função para inserir um novo contato
  $scope.addContact = function (contact) {
    $scope.contacts.push(contact);
    delete $scope.contact;
    $scope.contactForm.$setPristine();
  };

});
