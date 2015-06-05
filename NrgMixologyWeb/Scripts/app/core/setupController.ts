
class SetupController {
    static $inject = ["$firebaseArray"];

    constructor(private $firebaseArray) {
        var combos = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/combos"));
        var drinks = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/drinks"));

        var drink1, drink2;
            drinks.$add({
            Brand: "Rockstar",
            Name: "Lime Freeze",
            IsJuice: true,
            HasCalories: true,
            IsCarbonated: true,
            Description:"So limey",
            Image:"lime-freeze_1.jpg"
            }).then((result) => {
                drink1 = result.key();
            });
        drinks.$add({
            Brand: "NOS",
            Name: "Grap",
            IsJuice: false,
            HasCalories: true,
            IsCarbonated: true,
            Description: "Grape-ly good",
            Image:"nos_grape.jpg"
       }).then((result) => {
            drink2 = result.key();
        });        
        var combo = combos.$add({
            Drinks:[null],
            Name: "Lime Ricky",
            Rating: 5,
            Description: "Such lime so rick"
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