/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />

class MixologyApp {
    module;
    constructor() {
        console.info("Starting App");
        this.module = angular.module("MixologyApp", ["ngRoute", "ngMaterial", "MixologyApp.Core", "MixologyApp.Controllers","MixologyApp.Directives"]);
    }

    Constant(key, value) {
        this.module.constant(key, value);
    }
}

var app = new MixologyApp();
app.Constant("FIREBASE_URL", "https://nrgmixology.firebaseio.com/");
app.module.config(["$routeProvider", "$locationProvider", ($routeProvider: angular.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
        $routeProvider.when("/", {
            templateUrl: "/views/popular.html",
            controller: "PopularController",
            controllerAs: "popular"
        }).when("/admin", {
            templateUrl: "/views/admin.html",
            controller: "AdminController",
            controllerAs: "admin"
        });

        $locationProvider.html5Mode({ enabled: true, requireBase: false});
    }
]);