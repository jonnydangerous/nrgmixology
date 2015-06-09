/// <reference path="../../typings/angularjs/angular.d.ts" />

((angular) => {
    angular.module("MixologyApp.Services", ["firebase"]);
    angular.module("MixologyApp.Controllers", ["firebase","MixologyApp.Services"]);
})(angular);