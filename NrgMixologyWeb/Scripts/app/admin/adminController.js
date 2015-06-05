/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />
var AdminController = (function () {
    function AdminController($firebaseArray, FIREBASE_URL) {
        var _this = this;
        var list = $firebaseArray(new Firebase(FIREBASE_URL + "combos"));
        var drinks = $firebaseArray(new Firebase(FIREBASE_URL + "drinks"));
        drinks.$loaded().then(function (result) {
            _this.Drinks = result;
        });
        list.$loaded().then(function (result) {
            _this.DrinkCombos = result;
        });
    }
    AdminController.$inject = ["$firebaseArray", "FIREBASE_URL"];
    return AdminController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Controllers", []);
    mod.controller("AdminController", AdminController);
})(angular);
//# sourceMappingURL=adminController.js.map