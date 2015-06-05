var Ui;
(function (Ui) {
    'use strict';
    function RatingDirective() {
        return {
            restrict: 'A',
            scope: { Rating: "=rating", Enabled: "=enabled" },
            link: function (scope, element, attributes) {
                element.rating({
                    initialRating: scope.Rating,
                    maxRating: 5,
                    interactive: scope.Enabled
                });
            }
        };
    }
    Ui.RatingDirective = RatingDirective;
    ;
})(Ui || (Ui = {}));
var Ui;
(function (Ui) {
    'use strict';
    angular.module('MixologyApp.Directives', [])
        .directive('rating', Ui.RatingDirective);
})(Ui || (Ui = {}));
//((angular) => {
//    var mod = angular.module("MixologyApp.Directives", []);
//    mod.directive("CoreDirectives", Ui.RatingDirective);
//})(angular); 
//# sourceMappingURL=coreDirectives.js.map