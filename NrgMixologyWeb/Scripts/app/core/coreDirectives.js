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
var Directives;
(function (Directives) {
    "use strict";
    angular.module("MixologyApp.Directives", []);
    Directives.getModule = function () {
        return angular.module("MixologyApp.Directives");
    };
})(Directives || (Directives = {}));
var Rating = (function () {
    function Rating() {
        this.restrict = "A";
        this.scope = {
            Rating: "=rating",
            Enabled: "=enabled"
        };
        this.link = function (scope, element, attrs, ngModel) {
            element.rating({
                initialRating: scope.Rating,
                maxRating: 5,
                interactive: scope.Enabled
            });
        };
    }
    return Rating;
})();
var Drinks = (function () {
    function Drinks() {
        this.restrict = "E";
        this.scope = {
            Drinks: "=items"
        };
        this.templateUrl = "drinks.html";
        this.link = function (scope, element, attrs, ngModel) {
            console.info(scope.Drinks);
        };
    }
    return Drinks;
})();
var ui = Directives.getModule();
ui.directive("rating", function () { return new Rating(); });
ui.directive("drinks", function () { return new Drinks(); });
//# sourceMappingURL=coreDirectives.js.map