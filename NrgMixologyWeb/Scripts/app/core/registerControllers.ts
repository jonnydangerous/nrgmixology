/// <reference path="../../typings/angularjs/angular.d.ts" />

((angular) => {
    var services = angular.module("MixologyApp.Services", ["firebase"]);
    services.constant("FIREBASE_URL", "https://nrgmixology.firebaseio.com/");

    angular.module("MixologyApp.Controllers", ["MixologyApp.Services"]);
})(angular);