class SearchController {
    static $inject = ["$scope","SearchService"];
    Drinks: Array<IDrink>;
    Filter = undefined;
    constructor(private $scope, private SearchService) {
        console.info("Loading Search Controller");
        this.Drinks = SearchService.Drinks;
        this.Filter = SearchService.Filter;
    }

    FilterDrinks = (filter)=> {
        switch (filter) {
        case "Has Carbonation":
                this.Filter = { HasCarbonation: true };
            break;
        case "Has Juice":
                this.Filter = { HasJuice: true };
            break;
        case "Has Calories":
                this.Filter = { HasCalories: true };
            break;
        default:
        }
    }
}
((angular) => {
    var mod = angular.module("MixologyApp.Controllers");
    mod.controller("SearchController", SearchController);
})(angular);