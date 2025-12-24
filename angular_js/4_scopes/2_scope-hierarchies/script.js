(function () {
  angular
    .module("scopeExample", [])
    .controller("GreetingController", [
      "$scope",
      "$rootScope",
      function ($scope, $rootScope) {
        $scope.name = "World";
        $rootScope.department = "AngularJS";
      },
    ])
    .controller("ListController", [
      "$scope",
      function ($scope) {
        $scope.names = ["Igor", "Misko", "Vojta"];
      },
    ]);
})();
