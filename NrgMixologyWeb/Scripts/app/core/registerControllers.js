/// <reference path="../../typings/angularjs/angular.d.ts" />
(function (angular) {
    var services = angular.module("MixologyApp.Services", ["firebase"]);
    services.constant("FIREBASE_URL", "https://nrgmixology.firebaseio.com/");
    angular.module("MixologyApp.Controllers", ["MixologyApp.Services"]);
})(angular);
//# sourceMappingURL=registerControllers.js.map