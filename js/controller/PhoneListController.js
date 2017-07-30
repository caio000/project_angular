myApp.controller("phoneListController", function ($scope, contacts, $document) {

  $scope.app = "Lista telefonica";
  $scope.page = {};
  $scope.select = 'select';
  $scope.contacts = contacts.data;

  var init = function () {
    // verifica se existe contatos cadastrados
    if (($scope.contacts.length > 0 && $scope.contacts == true)) taxCalculate($scope.contacts);
  }

  var taxCalculate = function (contacts) {
    contacts.forEach(function (contact) {
      contact.phoneCompany.priceWithTax = contact.phoneCompany.price * 1.2;
    });
  };

  init();

  $scope.logoToggle = function () {
    $document.find('#logo').toggle(1000);
  };

  // Função que lista todos os contatos cadastrados
  var loadContacts = function () {
    contactsAPI.getContacts().then(function success (response) {
      $scope.contacts = response.data;
    }, function error (response) {
      $scope.page.status = {title: 'Deu Ruim',message: 'Não foi possivel carregar a lista de contatos cadastrados'};
    });
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

});
