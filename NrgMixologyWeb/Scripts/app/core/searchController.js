/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />
var SearchController = (function () {
    function SearchController($scope, SearchService) {
        var _this = this;
        this.$scope = $scope;
        this.SearchService = SearchService;
        this.Filter = undefined;
        console.info("Loading Search Controller");
        this.Drinks = SearchService.Drinks;
        this.Filter = SearchService.Filter;
        $scope.$watch(function () { return _this.Filter; }, function (newValue) {
            console.info(newValue);
        }, true);
    }
    SearchController.prototype.FilterDrinks = function () {
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
    };
    SearchController.$inject = ["$scope", "SearchService"];
    return SearchController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Controllers");
    mod.controller("SearchController", SearchController);
})(angular);
//# sourceMappingURL=searchController.js.map