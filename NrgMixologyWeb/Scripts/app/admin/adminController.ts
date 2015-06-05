/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />

class AdminController {
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
}
((angular) => {
    var mod = angular.module("MixologyApp.Controllers", []);
    mod.controller("AdminController", AdminController);
})(angular);