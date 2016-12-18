require.config({
    paths: {
        "jquery": '../../../../lib/jquery-3.1.1.min',
        "knockout": '../../../../lib/knockout-3.4.1.min',
        "knockout.validation": "../../../../lib/knockout.validation.min"
    },
    shim: {
        "knockout.validation": {
            "deps": ["knockout"]
        }
    }
});