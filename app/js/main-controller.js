export default function mainCtrl($scope, $mdSidenav) {
  $scope.message = "AM";
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  }
}
