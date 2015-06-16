/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/firebase/firebase.d.ts" />

class PopularController {
    static $inject = ["$scope","SearchService"];
    DrinkCombos: Array<any>;
    SuggestedCombo = null;
    Loaded: boolean = true;
    Filter=null;
    constructor($scope:ng.IScope, private SearchService) {
        console.info("Loading Popular Controller");
//        this.service = SearchService;
        this.Filter = SearchService.Filter;
        $scope.$watch(() => SearchService.Loaded, (newValue) => {
            if (newValue != undefined) {
                this.Loaded = SearchService.Loaded;
            }
        });
        $scope.$watch(() => SearchService.Combos, (newValue) => {
            if (newValue != undefined) {
                this.DrinkCombos = SearchService.Combos;
            }
        });
        $scope.$watch(() => this.SearchService.Filter, (newValue) => {

//            if (newValue != undefined) {
//                $scope.$apply();
//            }
        });
        $scope.$on("update_drinks", () => {$scope.$apply()});

    }
    
    GetRandom() {
        this.SuggestedCombo = this.DrinkCombos[Math.floor(Math.random() * this.DrinkCombos.length)];
    }
    
}
((angular) => {
    var mod = angular.module("MixologyApp.Controllers");
    mod.controller("PopularController", PopularController);
})(angular);