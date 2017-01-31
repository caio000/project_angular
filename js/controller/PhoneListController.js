myApp.controller("phoneListController", function ($scope, $http, contactsAPI) {
  $scope.app = "Lista telefonica";
  $scope.select = 'select';
  $scope.contactReg = false;
  $scope.contacts = [];
  $scope.phoneCompanies = [
    {name: 'Oi', code: 14, category: "Mobile", price: 2},
    {name: 'Vivo', code: 15, category: "Mobile", price: 1},
    {name: 'Tim', code: 41, category: "Mobile", price: 3},
    {name: 'GVT', code: 25, category: 'Fixo', price: 1},
    {name: 'Embratel', code: 21, category: 'Fixo', price: 2}
  ];


  // Função que lista todos os contatos cadastrados
  var loadContacts = function () {
    contactsAPI.getContacts().then(function success (response) {
      $scope.contacts = response.data;
    }, function error (response) {
      console.log('erro');
    });
  };

  // Carrega todas as operadoras caradastradas
  var loadPhoneCompanies = function () {
    $http.get('php/phoneCompanies.php').then(function success (response) {
      $scope.phoneCompanies = response.data;
    });
  };

  // Função que cadastra um novo contato
  $scope.contactRegister = function (contact) {
    contactsAPI.saveContact(contact).then(function success(response) {
      $scope.contactReg = true;
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
  // loadPhoneCompanies();

});
