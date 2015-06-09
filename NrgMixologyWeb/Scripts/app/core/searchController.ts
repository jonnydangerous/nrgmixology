class SearchController {
    static $inject = ["SearchService"];
    Drinks: Array<IDrink>;
    constructor(SearchService) {
        console.info("Loading Search Controller");
        this.Drinks = SearchService.Drinks;
    }
}
((angular) => {
    var mod = angular.module("MixologyApp.Controllers");
    mod.controller("SearchController", SearchController);
})(angular);