/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />

class PopularController {
    static $inject = ["$firebaseArray", "FIREBASE_URL"];
    DrinkCombos: Array<any>;
    Drinks: Array<any>;

    constructor($firebaseArray, FIREBASE_URL) {
        var list = $firebaseArray(new Firebase(FIREBASE_URL + "combos"));
        var drinks = $firebaseArray(new Firebase(FIREBASE_URL + "drinks"));
        drinks.$loaded().then((result) => {
            this.Drinks = result;
        });
        list.$loaded().then((result) => {
            this.DrinkCombos = result;
        });
    }

    GetDrinks(drinkIdS) {
        if (this.Drinks.length > 0) {
            var ids = [];
            for (var prop in drinkIdS) {
                ids.push(drinkIdS[prop]);
            }
            return this.Drinks.filter((drink) => { return ids.indexOf(drink.$id) >= 0 });
        }
    }
}
((angular) => {
    var mod = angular.module("MixologyApp.Controllers", []);
    mod.controller("PopularController", PopularController);
})(angular);