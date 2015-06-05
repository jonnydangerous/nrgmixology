/// <reference path="typings/angularjs/angular.d.ts" />
var MixologyApp = (function () {
    function MixologyApp() {
        console.info("Starting App");
        this.module = angular.module("MixologyApp", ["ngMaterial", "MixologyApp.Core", "MixologyApp.Controllers", "MixologyApp.Directives"]);
    }
    MixologyApp.prototype.Constant = function (key, value) {
        this.module.constant(key, value);
    };
    return MixologyApp;
})();
var app = new MixologyApp();
app.Constant("FIREBASE_URL", "https://nrgmixology.firebaseio.com/");
//# sourceMappingURL=app.js.map