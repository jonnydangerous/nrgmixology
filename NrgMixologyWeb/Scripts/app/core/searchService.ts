class SearchService {
    static $inject = ["$firebaseArray", "FIREBASE_URL"];
    SearchFilter: any;
    Drinks: Array<IDrink>;

    constructor($firebaseArray, FIREBASE_URL) {
        console.info("Loading Search Service");
        var drinks = $firebaseArray(new Firebase(FIREBASE_URL + "drinks"));

        drinks.$loaded().then((result) => {
            this.Drinks = result;
        });
    }
}
((angular) => {
    var mod = angular.module("MixologyApp.Services");
    mod.service("SearchService", SearchService);
})(angular);