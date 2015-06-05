/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />
var AdminController = (function () {
    function AdminController($firebaseArray, FIREBASE_URL) {
        var _this = this;
        var combos = $firebaseArray(new Firebase(FIREBASE_URL + "combos"));
        combos.$loaded().then(function (result) {
            _this.DrinkCombos = result;
            var drinks = $firebaseArray(new Firebase(FIREBASE_URL + "drinks"));
            drinks.$loaded().then(function (result) {
                _this.Drinks = result;
                _this.DrinkCombos.forEach(function (combo) {
                    combo.Drinks = _this.GetDrinks(combo.Drinks);
                });
            });
        });
    }
    AdminController.prototype.GetDrinks = function (drinkIds) {
        if (!this.Drinks)
            return [];
        var ids = [];
        for (var prop in drinkIds) {
            ids.push(drinkIds[prop]);
        }
        return this.Drinks.filter(function (drink) { return ids.indexOf(drink.$id) >= 0; });
    };
    AdminController.$inject = ["$firebaseArray", "FIREBASE_URL"];
    return AdminController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Controllers", []);
    mod.controller("AdminController", AdminController);
})(angular);
//# sourceMappingURL=adminController.js.map