var SetupController = (function () {
    function SetupController($firebaseArray) {
        this.$firebaseArray = $firebaseArray;
        //        var combos = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/combos"));
        //        var drinks = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/drinks"));
        //
        //        var drink1, drink2;
        //            drinks.$add({
        //            Brand: "Monster",
        //            Name: "Khaos",
        //            IsJuice: true,
        //            HasCalories: true,
        //            Description:"Flavor splosion "
        //        }).then((result) => {
        //                drink1 = result.key();
        //            });
        //        drinks.$add({
        //            Brand: "Monster",
        //            Name: "Ripper",
        //            IsJuice: true,
        //            HasCalories: true,
        //            Description:"Flavor mega splosion "
        //       }).then((result) => {
        //            drink2 = result.key();
        //        });        
        //        var combo = combos.$add({
        //            Drinks:[null],
        //            Name: "Khaos Ripper",
        //            Rating: 5,
        //            Description: "Delicious pineapple orange combo. Great for mornings or when you want to avoid carbonation"
        //        }).then((result) => {
        //            console.info(result);
        //                var drinkCombo = $firebaseArray(new Firebase("https://nrgmixology.firebaseio.com/combos/" + result.key()+ "/Drinks"));
        //                drinkCombo.$add(drink1);
        //                drinkCombo.$add(drink2);
        //        });
        //        
    }
    SetupController.$inject = ["$firebaseArray"];
    return SetupController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Core", ["firebase"]);
    mod.controller("SetupController", SetupController);
})(angular);
//# sourceMappingURL=setupController.js.map