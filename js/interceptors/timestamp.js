myApp.factory('timestamp',function () {
  return {
    request: function (config) {
      var url = config.url;
      // verifica se exite requisição de view
      if (url.indexOf('view') > -1) return config;

      var timestamp = new Date().getTime();
      config.url = url + "?timestamp=" + timestamp;
      return config;
    }
  };
});
