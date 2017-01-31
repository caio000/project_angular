myApp.factory('contactsAPI', function($http) {
  var _getContacts = function() {
    return $http.get('php/contact/getContacts.php');
  };

  var _saveContact = function (contact) {
    return $http.post("http://localhost/angular/php/contact/addContacts.php", contact);
  };


  return {
    getContacts: _getContacts,
    saveContact: _saveContact
  };
});
