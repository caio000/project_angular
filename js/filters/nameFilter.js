myApp.filter('name', function () {
  return function (input) {
    input = input.toLowerCase();
    var nameList = input.split(" ");
    nameList = nameList.map(function  (name) {
      if (/(da|de|do)/.test(name))
        name =  name.toLowerCase();
      else
        name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();

      return name;
    });
    return nameList.join(" ");
  }
});
