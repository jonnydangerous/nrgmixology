/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />

class AdminController {
    static $inject = ["$firebaseArray", "FIREBASE_URL"];
    DrinkCombos: Array<any>;
    Drinks: Array<any>;

    constructor($firebaseArray, FIREBASE_URL) {
        var combos = $firebaseArray(new Firebase(FIREBASE_URL + "combos"));
        combos.$loaded().then((result) => {
            this.DrinkCombos = result;

            var drinks = $firebaseArray(new Firebase(FIREBASE_URL + "drinks"));
            drinks.$loaded().then((result) => {
                this.Drinks = result;

                this.DrinkCombos.forEach((combo) => {
                    combo.Drinks = this.GetDrinks(combo.Drinks)
                })
            });
        });
    }

    GetDrinks(drinkIds: Array<number>) {
        if (!this.Drinks) return [];

        var ids = [];
        for (var prop in drinkIds) {
            ids.push(drinkIds[prop]);
        }
        return this.Drinks.filter((drink) => { return ids.indexOf(drink.$id)>=0 });
    }
}
((angular) => {
    var mod = angular.module("MixologyApp.Controllers", []);
    mod.controller("AdminController", AdminController);
})(angular);

