/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />
var SearchService = (function () {
    function SearchService($firebaseArray, FIREBASE_URL, $filter, $rootScope) {
        this.$filter = $filter;
        this.$rootScope = $rootScope;
        this._origCombos = [];
        this.Drinks = [];
        this.Combos = [];
        this.Loaded = false;
        this.Filter = { HasJuice: null };
        console.info("Loading Search Service");
        var drinks = $firebaseArray(new Firebase(FIREBASE_URL + "drinks"));
        var list = $firebaseArray(new Firebase(FIREBASE_URL + "combos"));
        this.fetchData(drinks, list);
    }
    SearchService.prototype.fetchData = function (drinks, list) {
        var _this = this;
        drinks.$loaded().then(function (result) {
            _this.Drinks = result;
            list.$loaded().then(function (result) {
                _this.Combos = result;
                _this.Combos.forEach(function (combo) {
                    combo.DrinksObjs = _this.GetDrinks(combo.Drinks);
                    angular.extend(combo, { HasCarbonation: _this.hasCarbonation(combo), HasJuice: _this.hasJuice(combo), HasCalories: _this.hasCalories(combo) });
                });
                _this._origCombos = angular.copy(_this.Combos);
                _this.Loaded = true;
            });
        });
    };
    SearchService.prototype.FilterCombo = function () {
        this.Combos = this.$filter("filter")(this._origCombos, this.Filter);
        this.$rootScope.$broadcast("update_drinks");
    };
    SearchService.prototype.GetDrinks = function (drinkIds) {
        if (this.Drinks.length > 0) {
            var ids = [];
            for (var prop in drinkIds) {
                if (drinkIds.hasOwnProperty(prop)) {
                    ids.push(drinkIds[prop]);
                }
            }
            return this.Drinks.filter(function (drink) { return ids.indexOf(drink.$id) >= 0; });
        }
        return [];
    };
    SearchService.prototype.hasCalories = function (mixedDrink) {
        return mixedDrink.DrinksObjs.filter(function (drink) { return drink.HasCalories; }).length > 0;
    };
    SearchService.prototype.hasCarbonation = function (mixedDrink) {
        return mixedDrink.DrinksObjs.filter(function (drink) { return drink.IsCarbonated; }).length > 0;
    };
    SearchService.prototype.hasJuice = function (mixedDrink) {
        return mixedDrink.DrinksObjs.filter(function (drink) { return drink.IsJuice; }).length > 0;
    };
    SearchService.$inject = ["$firebaseArray", "FIREBASE_URL", "$filter", "$rootScope"];
    return SearchService;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Services");
    mod.service("SearchService", SearchService);
})(angular);
//# sourceMappingURL=searchService.js.map