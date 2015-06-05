/// <reference path="typings/angularjs/angular.d.ts" />
class MixologyApp {
    module;
    constructor() {
        console.info("Starting App");
        this.module = angular.module("MixologyApp", ["ngMaterial", "MixologyApp.Core", "MixologyApp.Controllers","MixologyApp.Directives"]);
    }

    Constant(key, value) {
        this.module.constant(key, value);
    }
}

var app = new MixologyApp();
app.Constant("FIREBASE_URL", "https://nrgmixology.firebaseio.com/");