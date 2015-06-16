/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />

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
            Name: "Ultra Sunrise",
            IsJuice: false,
            HasCalories: false,
            IsCarbonated: true,
            Description: "Subtle flavor face slam, like being punched in the face by a butterfly infused sun beam",
            Image:"monster-ultra-sunrise.jpg"
       }).then((result) => {
            drink2 = result.key();
        });        
        var combo = combos.$add({
            Drinks:[null],
            Name: "Sherbert",
            Rating: 4,
            Description: "Leaves you wanting MOAR!",
            Image:"Rainbow.jpg"
        }).then((result) => {
            console.info(result);
                var drinkCombo = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/combos/" + result.key()+ "/Drinks"));
//                drinkCombo.$add(drink1);
                drinkCombo.$add(drink2);
        });
        
    }
}
((angular) => {
    var mod = angular.module("MixologyApp.Core", ["firebase"]);
    mod.controller("SetupController", SetupController);
})(angular);