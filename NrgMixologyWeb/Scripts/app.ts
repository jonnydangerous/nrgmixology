/// <reference path="typings/angularjs/angular.d.ts" />
class MixologyApp {
    constructor() {
        console.info("Starting App");
        angular.module("MixologyApp", ['ngMaterial']);
    }
}

var app = new MixologyApp();