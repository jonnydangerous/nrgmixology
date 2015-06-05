//module Ui {
//    'use strict';
//    export function RatingDirective(): ng.IDirective {
//        return {
//            restrict: 'A',
//            scope: { Rating: "=rating", Enabled: "=enabled" }, // use controller scope
//            link: (scope: IRating, element: ISemantic, attributes) => {
//                element.rating({
//                    initialRating: scope.Rating,
//                    maxRating: 5,
//                    interactive: scope.Enabled
//                });
//            }
//        }
//    };
//}
//module Ui {
//    'use strict';
//    angular.module('MixologyApp.Directives', [])
//        .directive('rating', Ui.RatingDirective);
//}
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
}

interface ISemantic extends ng.IAugmentedJQuery {
    rating: Function;
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
class Drinks implements ng.IDirective {
    public restrict: string = "E";
    public scope = {
        Drinks: "=items"
    };
    public templateUrl: string = "views/drinks.html";
    public link: ng.IDirectiveLinkFn = (scope: IDrinks, element: ISemantic, attrs: ng.IAttributes, ngModel: any) => {
        console.info(scope.Drinks);
    }
}

var ui = Directives.getModule();
ui.directive("rating",()=> new Rating());
ui.directive("drinks",()=> new Drinks());