/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />
var PopularController = (function () {
    function PopularController($firebaseArray, FIREBASE_URL) {
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
    PopularController.prototype.GetDrinks = function (drinkIdS) {
        if (this.Drinks.length > 0) {
            var ids = [];
            for (var prop in drinkIdS) {
                ids.push(drinkIdS[prop]);
            }
            return this.Drinks.filter(function (drink) { return ids.indexOf(drink.$id) >= 0; });
        }
    };
    PopularController.$inject = ["$firebaseArray", "FIREBASE_URL"];
    return PopularController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Controllers", []);
    mod.controller("PopularController", PopularController);
})(angular);
//# sourceMappingURL=popularController.js.map