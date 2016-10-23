define(["knockout", "knockout.validation", "jquery"], function (ko, kov, $) {

    function init() {

        ko.validation.init({
            registerExtenders: true
        });

        $.getJSON("formDefinitions/SampleForm.json", function (data) {
            ko.applyBindings(new ViewModel(data.FieldDefinitions));
        });
    }

    function ViewModel(data) {
        var self = this;

        self.FieldDefinitions = ko.observableArray(ko.utils.arrayMap(data, function (item) {
            return new ViewModelField(item);
        }));

        self.Errors = ko.validation.group(this, {
            deep: true,
            observable: false
        });

        self.Validate = function () {
            if (self.Errors().length > 0) {
                self.Errors.showAllMessages();
            }
        };
    }

    function ViewModelField(data) {
        var self = this;

        self.FieldId = ko.observable(data.FieldId).extend({required: true});
        self.FieldType = ko.observable(data.FieldType).extend({required: true});
        self.FieldName = ko.observable(data.FieldName).extend({required: true});

        if (data.EnumValues) {
            self.EnumValues = ko.observableArray(data.EnumValues);
        }

        if (Array.isArray(data.Value)) {
            self.Value = ko.observableArray(data.Value);
        }
        else {
            // https://github.com/Knockout-Contrib/Knockout-Validation
            self.Value = ko.observable(data.Value).extend(data.Validation);
        }
    }

    return {init: init}
});