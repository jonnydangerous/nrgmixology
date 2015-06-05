module Ui {
    'use strict';
    export function RatingDirective(): ng.IDirective {
        return {
            restrict: 'A',
            scope: { Rating: "=rating", Enabled:"=enabled" }, // use controller scope
            link: (scope: IRating, element: ISemantic, attributes) => {
                element.rating({
                    initialRating: scope.Rating,
                    maxRating: 5,
                    interactive:scope.Enabled
                });
            }
        }
    };
}
module Ui {
    'use strict';
    angular.module('MixologyApp.Directives', [])
        .directive('rating', Ui.RatingDirective);
}

interface IRating extends ng.IScope{
    Rating: number;
    Enabled:boolean;
}

interface ISemantic extends JQuery {
    rating: Function;
}

//((angular) => {
//    var mod = angular.module("MixologyApp.Directives", []);
//    mod.directive("CoreDirectives", Ui.RatingDirective);
//})(angular);