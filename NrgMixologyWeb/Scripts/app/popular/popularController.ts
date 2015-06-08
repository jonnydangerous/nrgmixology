﻿/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />

class PopularController {
    static $inject = ["$firebaseArray", "FIREBASE_URL"];
    DrinkCombos: Array<any>;
    Drinks: Array<IDrink>;
    SuggestedCombo = null;
    constructor($firebaseArray, FIREBASE_URL) {
        console.info("Loading Popular Controller");
        var list = $firebaseArray(new Firebase(FIREBASE_URL + "combos"));
        list.$loaded().then((result) => {
            this.DrinkCombos = result;

            var drinks = $firebaseArray(new Firebase(FIREBASE_URL + "drinks"));

            drinks.$loaded().then((result) => {
                this.Drinks = result;

                this.DrinkCombos.forEach((combo) => {
                    combo.DrinksObjs = this.GetDrinks(combo.Drinks);
                    angular.extend(combo, {HasCarbonation:this.hasCarbonation(combo), HasJuice:this.hasJuice(combo)});
                });
            });
        });

    }

    GetDrinks(drinkIds): Array<IDrink> {
        if (this.Drinks.length > 0) {
            var ids = [];
            for (let prop in drinkIds) {
                if (drinkIds.hasOwnProperty(prop)) {
                    ids.push(drinkIds[prop]);
                }
            }
            return this.Drinks.filter((drink) => { return ids.indexOf(drink.$id) >= 0 });
        }
        return [];
    }

    GetRandom() {
        this.SuggestedCombo =  this.DrinkCombos[Math.floor(Math.random() * this.DrinkCombos.length)];
    }

    private hasCarbonation(mixedDrink) {
        return mixedDrink.DrinksObjs.filter((drink) => { return <IDrink>drink.IsCarbonated; }).length>0;
    }
    private hasJuice(mixedDrink) {
        return mixedDrink.DrinksObjs.filter((drink) => { return <IDrink>drink.HasJuice; }).length >0 ;
    }
}

interface IDrink{
    $id:string;
    Name: string;
    Brand: string;
    IsJuice: boolean;
    HasCalories: boolean;
    IsCarbonated: boolean;
    Description: string;
    Image: string;
}
((angular) => {
    var mod = angular.module("MixologyApp.Controllers");
    mod.controller("PopularController", PopularController);
})(angular);