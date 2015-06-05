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
    PopularController.$inject = ["$firebaseArray", "FIREBASE_URL"];
    return PopularController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Controllers", []);
    mod.controller("PopularController", PopularController);
})(angular);
//# sourceMappingURL=popularController.js.map