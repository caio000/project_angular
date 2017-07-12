myApp.filter('ellipsis', function () {
  return function (input, size) {
    if (input.length <= size)
      output = input;
    else
      output = input.substring(0,(size || 2)) + '...';

    return output;
  }
});
