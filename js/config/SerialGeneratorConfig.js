// Utilizar o prefix provider para o angular saber que o que estamos chamando é
// um provider.
angular.module('phoneList').config(function (SerialProvider) {
	SerialProvider.setLength(5);
});
