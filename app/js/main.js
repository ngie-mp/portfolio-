import routes from './route-config';
import sw from './sw-register';
import mainCtrl from './main-controller'

let app = angular.module('gapp', ['ngRoute', 'ngMaterial']);

app.config(routes);
app.controller('mainCtrl', mainCtrl);
sw();

export default app;
