/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
var MixologyApp = (function () {
    function MixologyApp() {
        console.info("Starting App");
        this.module = angular.module("MixologyApp", ["ngRoute", "ngMaterial", "MixologyApp.Core", "MixologyApp.Controllers", "MixologyApp.Directives"]);
    }
    MixologyApp.prototype.Constant = function (key, value) {
        this.module.constant(key, value);
    };
    return MixologyApp;
})();
var app = new MixologyApp();
app.Constant("FIREBASE_URL", "https://nrgmixology.firebaseio.com/");
app.module.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "/views/popular.html",
            controller: "PopularController",
            controllerAs: "popular"
        }).when("/admin", {
            templateUrl: "/views/admin.html",
            controller: "AdminController",
            controllerAs: "admin"
        });
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    }
]);
//# sourceMappingURL=app.js.map