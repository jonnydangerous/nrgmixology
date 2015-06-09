/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />

class PopularController {
    static $inject = ["$firebaseArray", "FIREBASE_URL", "SearchService"];
    DrinkCombos: Array<any>;
    SuggestedCombo = null;
    Loaded: boolean = true;
    constructor($firebaseArray, FIREBASE_URL, private SearchService) {
        console.info("Loading Popular Controller");
        var list = $firebaseArray(new Firebase(FIREBASE_URL + "combos"));
        list.$loaded().then((result) => {
            this.DrinkCombos = result;
            
            this.DrinkCombos.forEach((combo) => {
                combo.DrinksObjs = this.GetDrinks(combo.Drinks);
                angular.extend(combo, { HasCarbonation: this.hasCarbonation(combo), HasJuice: this.hasJuice(combo), HasCalories: this.hasCalories(combo) });
                this.Loaded = true;
            });
        });

    }

    GetDrinks(drinkIds): Array<IDrink> {
        if (this.SearchService.Drinks.length > 0) {
            var ids = [];
            for (let prop in drinkIds) {
                if (drinkIds.hasOwnProperty(prop)) {
                    ids.push(drinkIds[prop]);
                }
            }
            return this.SearchService.Drinks.filter((drink) => { return ids.indexOf(drink.$id) >= 0 });
        }
        return [];
    }

    GetRandom() {
        this.SuggestedCombo = this.DrinkCombos[Math.floor(Math.random() * this.DrinkCombos.length)];
    }

    private hasCalories(mixedDrink) {
        return mixedDrink.DrinksObjs.filter((drink) => { return <IDrink>drink.HasCalories; }).length > 0;
    }
    private hasCarbonation(mixedDrink) {
        return mixedDrink.DrinksObjs.filter((drink) => { return <IDrink>drink.IsCarbonated; }).length > 0;
    }
    private hasJuice(mixedDrink) {
        return mixedDrink.DrinksObjs.filter((drink) => { return <IDrink>drink.IsJuice; }).length > 0;
    }
}

interface IDrink {
    $id: string;
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