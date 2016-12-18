require(["app", "jquery"], function (app, $) {
    $.ajaxSetup({
        "error": function () {
            alert("Cannot load ajak; perhaps you are running IE or Chrome on windows? Try FireFox.");
        }
    });

    app.init();
});