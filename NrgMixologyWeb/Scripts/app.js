/// <reference path="scripts/typings/angularjs/angular.d.ts" />
var MixologyApp = (function () {
    function MixologyApp() {
        console.info("Starting App");
        angular.module("MixologyApp", ['ngMaterial']);
    }
    return MixologyApp;
})();
var app = new MixologyApp();
//# sourceMappingURL=app.js.map