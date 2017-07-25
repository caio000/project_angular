myApp.controller("phoneListController", function ($scope, contactsAPI, CompanyAPI, SerialGenerator) {

  $scope.app = "Lista telefonica";
  $scope.page = {};
  $scope.select = 'select';
  $scope.contactReg = false;
  $scope.contacts = [];
  $scope.phoneCompanies = [];


  // Função que lista todos os contatos cadastrados
  var loadContacts = function () {
    contactsAPI.getContacts().then(function success (response) {
      $scope.contacts = response.data;
    }, function error (response) {
      $scope.page.status = {title: 'Deu Ruim',message: 'Não foi possivel carregar a lista de contatos cadastrados'};
    });
  };

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
      angular.element(document).find('#form-alert').fadeIn(1000);
      loadContacts();
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

  // função para remover um contato
  $scope.deleteContact = function (contacts) {
    $scope.contacts = contacts.filter(function (contact) {
      if (!contact.select) return contact;
    });

  };

  // função para verificar se existe algum contato selecionado
  $scope.isContactSelect = function (contacts) {
    var i = contacts.some(function (contact) {
      return contact.select;
    });
    return i;
  };

  // Função que filtra a tabela de contatos
  $scope.orderColumnBy = function (col) {
    $scope.orderColumn = col;
    $scope.orderDirection = !$scope.orderDirection;
  };

  loadContacts();
  loadPhoneCompanies();

});
