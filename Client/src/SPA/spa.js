(function ($, ko) {

    function RssViewModel() {
        // Data
        var self = this;
        self.genres = ['news', 'sport'];
        self.chosenGenreId = ko.observable();
        self.chosenGenre = ko.observable();
        self.chosenArticle = ko.observable();

        // Behaviours
        self.goToGenre = function (genre) {

            self.chosenArticle(null);
            self.chosenGenreId(genre);

            $.get('/KnockoutPit/Client/moqServer/rss/' + genre + '.json')
                .done(function (data) {
                    self.chosenGenre(data);
                    //alert(data.id);
                });
        };

        self.goToArticle = function (article) {
            $.get('/KnockoutPit/Client/moqServer/rss/' + article.genre + "/" + article.id + '.json')
                .done(function (data) {
                    self.chosenArticle(data);
                });
        };
    }

    $(function () {
        // Activates knockout.js
        ko.applyBindings(new RssViewModel());
    });
}($, ko));
