import routes from './route-config.js';
import sw from './sw-register.js';

let app = angular.module('gapp', ['ngRoute', 'ngMaterial']);

app.controller('mainCtrl', function($scope) {
  $scope.message = "Routes";
});

app.config(routes);
sw();

export default app;
