(function () {
  const app = angular.module("form-example1", []);
  var INTEGER_REGEXP = /^-?\d+$/;
  app.directive("integer", function () {
    return {
      require: "ngModel",
      link: function (scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function (modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }

          if (INTEGER_REGEXP.text(viewValue)) {
            return true;
          }

          return false;
        };
      },
    };
  });

  app.directive("username", function ($q, $timeout) {
    return {
      require: "ngModel",
      link: function (scope, elm, attrs, ctrl) {
        var usernames = ["Jim", "John", "Jill", "Jackie"];

        ctrl.$asyncValidators.username = function (modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return $q.resolve();
          }

          var def = $q.defer();

          $timeout(function () {
            if (usernames.indexOf(modelValue) === -1) {
              def.resolve();
            } else {
              def.reject();
            }
          }, 2000);

          return def.promise;
        };
      },
    };
  });

  app.directive("overwriteEmail", function () {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;

    return {
      require: "?ngModel",
      link: function (scope, elm, attrs, ctrl) {
        if (ctrl && ctrl.$validators.email) {
          ctrl.$validators.email = function (modelValue) {
            return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
          };
        }
      },
    };
  });
})();
