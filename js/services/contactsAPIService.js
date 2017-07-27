myApp.factory('contactsAPI', function($http, Config) {
  var _getContacts = function() {
    return $http.get(Config.baseURL + 'php/contact/getContacts.php');
  };

  var _getContactById = function (id) {
    return $http.get(Config.baseURL + 'php/contact/getContacts.php?id='+id);
  };

  var _saveContact = function (contact) {
    return $http.post(Config.baseURL + "php/contact/addContacts.php", contact);
  };


  return {
    getContacts: _getContacts,
    getContactById: _getContactById,
    saveContact: _saveContact
  };
});
