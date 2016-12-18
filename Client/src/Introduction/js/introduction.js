// This is a view model - it defines the data and the behavior of your View
(function ($, ko) {

    function AppViewModel() {

        // Observables are entities which knockout will monitor for changes
        this.firstName = ko.observable("");
        this.lastName = ko.observable("");

        // A computed entity is something which knockout computes when observables have changed
        this.fullName = ko.computed(function () {
            return this.firstName() + " " + this.lastName();
        }, this);

        // This is a callback from a data bound click event
        this.clear = function () {
            this.lastName('');
            this.firstName('');
        };
    }

    $(function () {
        // This activates knockout.js
        ko.applyBindings(new AppViewModel());
    });
}($, ko));