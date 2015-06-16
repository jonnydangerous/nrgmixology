/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
var MixologyApp = (function () {
    function MixologyApp() {
        console.info("Starting App");
        this.module = angular.module("MixologyApp", ["ngRoute", "ngMaterial", "MixologyApp.Services", "MixologyApp.Controllers", "MixologyApp.Directives"]);
    }
    MixologyApp.prototype.Constant = function (key, value) {
        this.module.constant(key, value);
    };
    return MixologyApp;
})();
var app = new MixologyApp();
app.module.config(["$routeProvider", "$locationProvider", "$mdThemingProvider", function ($routeProvider, $locationProvider, $mdThemingProvider) {
        $mdThemingProvider.theme("default").primaryPalette("blue", { 'default': '500' });
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
var CoreController = (function () {
    function CoreController($mdUtil, $mdSidenav) {
        this.$mdUtil = $mdUtil;
        this.$mdSidenav = $mdSidenav;
        this.toggleSidenav = this.buildToggler('left');
        console.info("Loading Core");
    }
    CoreController.prototype.buildToggler = function (navID) {
        var _this = this;
        var debounceFn = this.$mdUtil.debounce(function () {
            _this.$mdSidenav(navID)
                .toggle();
        }, 300);
        return debounceFn;
    };
    CoreController.$inject = ["$mdUtil", '$mdSidenav'];
    return CoreController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp");
    mod.controller("CoreController", CoreController);
})(angular);
//# sourceMappingURL=app.js.map