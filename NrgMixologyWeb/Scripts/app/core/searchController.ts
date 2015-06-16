class SearchController {
    static $inject = ["$scope","SearchService"];
    Drinks: Array<IDrink>;
    Filter = undefined;
    constructor(private $scope, private SearchService) {
        console.info("Loading Search Controller");
        this.Drinks = SearchService.Drinks;
        this.Filter = SearchService.Filter;
        $scope.$watch(()=>this.Filter, (newValue) => {
            console.info(newValue);
        },true);
    }

    FilterDrinks() {
//        switch (filter) {
//        case "Has Carbonation":
//                this.SearchService.Filter = { HasCarbonation: true };
//                this.SearchService.FilterCombo();
//
//            break;
//        case "Has Juice":
//                this.SearchService.Filter = { HasJuice: true };
//                this.SearchService.FilterCombo();
//
//            break;
//        case "Has Calories":
//                this.SearchService.Filter = { HasCalories: true };
//            this.SearchService.FilterCombo();
//            break;
//        default:
//        }
        this.SearchService.FilterCombo();
    }
}
((angular) => {
    var mod = angular.module("MixologyApp.Controllers");
    mod.controller("SearchController", SearchController);
})(angular);