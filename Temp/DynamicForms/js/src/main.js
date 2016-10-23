require(["app", "jquery"], function (app, $) {

    $.ajaxSetup({
        "error": function () {
            alert("FireFox only");
        }
    });

    app.init();
});