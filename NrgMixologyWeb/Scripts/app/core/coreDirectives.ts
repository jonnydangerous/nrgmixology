/// <reference path="../../typings/angularjs/angular.d.ts" />
module Directives {
    "use strict";
    angular.module("MixologyApp.Directives", []);
    export var getModule: () => ng.IModule = () => {
        return angular.module("MixologyApp.Directives");
    }
}
interface IRating extends ng.IScope {
    Rating: number;
    Enabled: boolean;
}
interface IDrinks extends ng.IScope {
    Drinks: Array<any>;
    OnFilter:Function;
}
interface IFilter extends ng.IScope {
 CheckedModel: boolean;
}

interface ISemantic extends ng.IAugmentedJQuery {
    rating: Function;
    dropdown: Function;
    transition:Function;
    checkbox:Function;
}

class Rating implements ng.IDirective {
    public restrict: string = "A";
    public scope = {
        Rating: "=rating", Enabled: "=enabled"
    };
    public link: ng.IDirectiveLinkFn = (scope: IRating, element: ISemantic, attrs: ng.IAttributes, ngModel: any) => {
        element.rating({
            initialRating: scope.Rating,
            maxRating: 5,
            interactive: scope.Enabled
        });
    }
}
class Checkbox implements ng.IDirective {
    public restrict: string = "A";
    public scope= { CheckedModel: "=checkbox" };
    public link: ng.IDirectiveLinkFn = (scope: IFilter, element: ISemantic, attrs: ng.IAttributes, ngModel: any) => {
        var local = scope;
        element.checkbox({ onChecked: () => {
             scope.CheckedModel = true;
        }, onUnchecked: () => { scope.CheckedModel = false; } });
//        element.dropdown({
//            transition: "drop",
//            onChange:  (text, value, $selected) => {
//                scope.OnFilter()($selected.text().trim());
//            } 
//        });

//        scope.$watch(() => scope.Drinks, (newValue, oldValue) => {
//            if (newValue && newValue.length > 0) {
//               
//            }
//        });

    }

    OnChange() {}
}
class Drinks implements ng.IDirective {
    public restrict: string = "E";
    public scope = {
        Drinks: "=items"
    };
    public templateUrl: string = "views/drinks.html";
    public link: ng.IDirectiveLinkFn = (scope, element: ISemantic, attrs: ng.IAttributes, ngModel: any) => {
        scope.RemoveDrink = this.RemoveDrink;
    };
    RemoveDrink(drink) {
        console.info("Remove " + drink.Name);
    }
}
class Rotate implements ng.IDirective {
    static $inject = ["$timeout"];
    public restrict: string = "A";

//    constructor(private $timeout) {}

    public link: ng.IDirectiveLinkFn = (scope, element: ISemantic, attrs: ng.IAttributes, ngModel: any) => {
        setTimeout(() => {
        element.transition({ animation: 'horizontal flip in', duration: 800 });
            
        }, 500);
//        element.transition('horizontal flip in');
    };
}

(() => {
    var ui = Directives.getModule();
    ui.directive("rating", () => new Rating());
    ui.directive("drinks", () => new Drinks());
    ui.directive("checkbox", () => new Checkbox());
    ui.directive("rotate", () => new Rotate());
})();