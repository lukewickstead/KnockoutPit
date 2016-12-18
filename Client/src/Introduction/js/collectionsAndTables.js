(function ($, ko) {

    // Voter is a person who votes for a party
    function Voter(name, party) {
        var self = this;
        self.name = ko.observable(name);
        self.party = ko.observable(party);
    }

    function Party(name, areChumps) {
        var self = this;
        self.name = ko.observable(name);
        self.chumps = ko.observable(areChumps);
    }

    // View model for the UI; defines behaviour and default UI
    function VotingViewModel() {
        var self = this;

        // EDITABLE DATA
        self.parties = ko.observableArray([
            new Party("", false),
            new Party("Green Party", false),
            new Party("Labour", true),
            new Party("Conservatives", true),
            new Party("Liberal Democrats", false)
        ]);

        self.voters = ko.observableArray([]);

        // COMPUTED DATA
        self.totalVotes = ko.computed(function () {
            var total = 0;
            for (var i = 0; i < self.voters().length; i++)
                total += self.voters()[i].name() !== "" && self.voters()[i].party().name() !== "" ? 1 : 0;
            return total;
        });

        //This allows us to pass in $data to the function which is bound to the party record
        self.totalPartyVotes = function (party) {
            return ko.computed(function () {
                var total = 0;
                for (var i = 0; i < self.voters().length; i++)
                    total += self.voters()[i].party().name() === party.name() ? 1 : 0;
                return total;
            });
        };

        // OPERATIONS
        self.addVoter = function () {
            self.voters.push(new Voter("", self.parties()[0]));
        };

        self.removeVoter = function (voter) {
            self.voters.remove(voter)
        }
    }

    $(function () {
        // Activates knockout.js
        ko.applyBindings(new VotingViewModel());
    });
}($, ko));