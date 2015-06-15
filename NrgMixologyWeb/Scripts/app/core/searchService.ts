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

interface ICombo {
    DrinksObjs: Array<IDrink>;
    Drinks: Array<any>;
}
class SearchService {
    static $inject = ["$firebaseArray", "FIREBASE_URL"];
    SearchFilter: any;
    Drinks: Array<IDrink>=[];
    Combos: Array<ICombo>=[];
    Loaded: boolean = false;
    Filter=undefined;

    constructor($firebaseArray, FIREBASE_URL) {
        console.info("Loading Search Service");
        var drinks = $firebaseArray(new Firebase(FIREBASE_URL + "drinks"));
        var list = $firebaseArray(new Firebase(FIREBASE_URL + "combos"));
        this.fetchData(drinks, list);

    }

    private fetchData(drinks, list) {
        drinks.$loaded().then((result) => {
            this.Drinks = result;
            list.$loaded().then((result) => {
                this.Combos = result;

                this.Combos.forEach((combo) => {
                    combo.DrinksObjs = this.GetDrinks(combo.Drinks);
                    angular.extend(combo, { HasCarbonation: this.hasCarbonation(combo), HasJuice: this.hasJuice(combo), HasCalories: this.hasCalories(combo) });
                });
                this.Loaded = true;
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
((angular) => {
    var mod = angular.module("MixologyApp.Services");
    mod.service("SearchService", SearchService);
})(angular);