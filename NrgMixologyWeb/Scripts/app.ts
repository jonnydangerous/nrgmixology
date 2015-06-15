/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />

class MixologyApp {
    module;
    constructor() {
        console.info("Starting App");
        this.module = angular.module("MixologyApp", ["ngRoute", "ngMaterial","MixologyApp.Services", "MixologyApp.Controllers", "MixologyApp.Directives"]);
    }

    Constant(key, value) {
        this.module.constant(key, value);
    }
}

var app = new MixologyApp();
app.module.config(["$routeProvider", "$locationProvider","$mdThemingProvider", ($routeProvider: angular.route.IRouteProvider, $locationProvider: ng.ILocationProvider, $mdThemingProvider) => {
    $mdThemingProvider.theme("default").primaryPalette("blue", { 'default': '500'});
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