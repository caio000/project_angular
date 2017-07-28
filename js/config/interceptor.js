myApp.config(function ($httpProvider) {
  $httpProvider.interceptors.push('timestamp');
  $httpProvider.interceptors.push('error');
  $httpProvider.interceptors.push('loading');
});
