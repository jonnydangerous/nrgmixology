var SetupController = (function () {
    function SetupController($firebaseArray) {
        this.$firebaseArray = $firebaseArray;
        var combos = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/combos"));
        var drinks = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/drinks"));
        var drink1, drink2;
        drinks.$add({
            Brand: "Rockstar",
            Name: "Lime Freeze",
            IsJuice: true,
            HasCalories: true,
            IsCarbonated: true,
            Description: "So limey",
            Image: "lime-freeze_1.jpg"
        }).then(function (result) {
            drink1 = result.key();
        });
        drinks.$add({
            Brand: "NOS",
            Name: "Grap",
            IsJuice: false,
            HasCalories: true,
            IsCarbonated: true,
            Description: "Grape-ly good",
            Image: "nos_grape.jpg"
        }).then(function (result) {
            drink2 = result.key();
        });
        var combo = combos.$add({
            Drinks: [null],
            Name: "Lime Ricky",
            Rating: 5,
            Description: "Such lime so rick"
        }).then(function (result) {
            console.info(result);
            var drinkCombo = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/combos/" + result.key() + "/Drinks"));
            drinkCombo.$add(drink1);
            drinkCombo.$add(drink2);
        });
    }
    SetupController.$inject = ["$firebaseArray"];
    return SetupController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Core", ["firebase"]);
    mod.controller("SetupController", SetupController);
})(angular);
//# sourceMappingURL=setupController.js.map