/// <reference path="../../typings/angularjs/angular.d.ts" />
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
            Rating: "=rating", Enabled: "=enabled"
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
var Checkbox = (function () {
    function Checkbox() {
        this.restrict = "A";
        this.scope = { CheckedModel: "=checkbox" };
        this.link = function (scope, element, attrs, ngModel) {
            var local = scope;
            element.checkbox({ onChecked: function () {
                    scope.CheckedModel = true;
                }, onUnchecked: function () { scope.CheckedModel = false; } });
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
        };
    }
    Checkbox.prototype.OnChange = function () { };
    return Checkbox;
})();
var Drinks = (function () {
    function Drinks() {
        var _this = this;
        this.restrict = "E";
        this.scope = {
            Drinks: "=items"
        };
        this.templateUrl = "views/drinks.html";
        this.link = function (scope, element, attrs, ngModel) {
            scope.RemoveDrink = _this.RemoveDrink;
        };
    }
    Drinks.prototype.RemoveDrink = function (drink) {
        console.info("Remove " + drink.Name);
    };
    return Drinks;
})();
var Rotate = (function () {
    function Rotate() {
        this.restrict = "A";
        //    constructor(private $timeout) {}
        this.link = function (scope, element, attrs, ngModel) {
            setTimeout(function () {
                element.transition({ animation: 'horizontal flip in', duration: 800 });
            }, 500);
            //        element.transition('horizontal flip in');
        };
    }
    Rotate.$inject = ["$timeout"];
    return Rotate;
})();
(function () {
    var ui = Directives.getModule();
    ui.directive("rating", function () { return new Rating(); });
    ui.directive("drinks", function () { return new Drinks(); });
    ui.directive("checkbox", function () { return new Checkbox(); });
    ui.directive("rotate", function () { return new Rotate(); });
})();
//# sourceMappingURL=coreDirectives.js.map