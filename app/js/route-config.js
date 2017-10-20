export default  function routeConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainCtrl'
    })
    .when('/next', {
      templateUrl: 'pages/next.html',
      controller: 'mainCtrl'
  });
}

routeConfig.$inject = ["$routeProvider"];
