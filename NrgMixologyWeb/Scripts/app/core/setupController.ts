
class SetupController {
    static $inject = ["$firebaseArray"];

    constructor(private $firebaseArray) {
        var combos = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/combos"));
        var drinks = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/drinks"));

        var drink1, drink2;
            drinks.$add({
            Brand: "Monster",
            Name: "Ultra Red",
            IsJuice: false,
            HasCalories: false,
            IsCarbonated: true,
            Description:"Red-rum, red-rum",
            Image:"monster-ultra-red.jpg"
            }).then((result) => {
                drink1 = result.key();
            });
        drinks.$add({
            Brand: "Monster",
            Name: "Ultra Citron",
            IsJuice: false,
            HasCalories: false,
            IsCarbonated: true,
            Description: "Energy infused lemon",
            Image:"Monster-Energy-Ultra-Citron-Flavor.jpg"
       }).then((result) => {
            drink2 = result.key();
        });        
        var combo = combos.$add({
            Drinks:[null],
            Name: "Iron Man",
            Rating: 4,
            Description: "I am Iron Man!",
            Image:"ironman_III.png"
        }).then((result) => {
            console.info(result);
                var drinkCombo = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/combos/" + result.key()+ "/Drinks"));
                drinkCombo.$add(drink1);
                drinkCombo.$add(drink2);
        });
        
    }
}
((angular) => {
    var mod = angular.module("MixologyApp.Core", ["firebase"]);
    mod.controller("SetupController", SetupController);
})(angular);