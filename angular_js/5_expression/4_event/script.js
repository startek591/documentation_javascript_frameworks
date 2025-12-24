(function () {
  angular.module("eventExampleApp", []).controller("EventController", [
    "$scope",
    function ($scope) {
      $scope.clickMe = function (clickEvent) {
        $scope.clickEvent = simpleKeys(clickEvent);
        console.log(clickEvent);
      };

      function simpleKeys(original) {
        return Object.keys(original).reduce(function (obj, key) {
          obj[key] =
            typeof original[key] === "object" ? "{...}" : original[key];
          return obj;
        });
      }
    },
  ]);
})();
