/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />
var PopularController = (function () {
    function PopularController($scope, SearchService) {
        var _this = this;
        this.SearchService = SearchService;
        this.SuggestedCombo = null;
        this.Loaded = true;
        this.Filter = null;
        console.info("Loading Popular Controller");
        //        this.service = SearchService;
        this.Filter = SearchService.Filter;
        $scope.$watch(function () { return SearchService.Loaded; }, function (newValue) {
            if (newValue != undefined) {
                _this.Loaded = SearchService.Loaded;
            }
        });
        $scope.$watch(function () { return SearchService.Combos; }, function (newValue) {
            if (newValue != undefined) {
                _this.DrinkCombos = SearchService.Combos;
            }
        });
        $scope.$watch(function () { return SearchService.Filter; }, function (newValue) {
            //            if (newValue != undefined) {
            //                $scope.$apply();
            //            }
        });
    }
    PopularController.prototype.GetRandom = function () {
        this.SuggestedCombo = this.DrinkCombos[Math.floor(Math.random() * this.DrinkCombos.length)];
    };
    PopularController.$inject = ["$scope", "SearchService"];
    return PopularController;
})();
(function (angular) {
    var mod = angular.module("MixologyApp.Controllers");
    mod.controller("PopularController", PopularController);
})(angular);
//# sourceMappingURL=popularController.js.map