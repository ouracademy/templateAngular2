"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_bag_1 = require('../message-bag');
var index_1 = require('./loader/index');
var Subject_1 = require('rxjs/Subject');
var validation_messages_rules_1 = require('./validation-messages-rules');
var index_2 = require('../message-parser/index');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var ValidationMessagesService = (function () {
    function ValidationMessagesService(messageLoader) {
        this.messageLoader = messageLoader;
        this.formChanges = new Subject_1.Subject();
    }
    /** Create messages if there's errors in the form it's watching
     *  @returns a MessageBag (if no errors an empty MessageBag)
     */
    ValidationMessagesService.prototype.seeForErrors = function (watchingForm) {
        var _this = this;
        this.formChanges.next(this.buildErrors(watchingForm));
        watchingForm.valueChanges
            .subscribe(function (data) {
            _this.formChanges.next(_this.buildErrors(watchingForm));
        });
        return this.formChanges;
    };
    ValidationMessagesService.prototype.buildErrors = function (watchingForm) {
        var _this = this;
        this.form = watchingForm;
        this.errors = new message_bag_1.MessageBag();
        if (this.messageWasLoaded) {
            Object.keys(this.form.controls).forEach(function (field) {
                _this.seeForErrorsInField(field);
            });
        }
        else {
            this.messageLoader.load().subscribe(function (validationMessageRules) {
                _this.validationMessagesRules = new validation_messages_rules_1.ValidationMessagesRules(validationMessageRules);
            });
        }
        return this.errors;
    };
    Object.defineProperty(ValidationMessagesService.prototype, "messageWasLoaded", {
        get: function () {
            return !!this.validationMessagesRules;
        },
        enumerable: true,
        configurable: true
    });
    ValidationMessagesService.prototype.seeForErrorsInField = function (field) {
        var control = this.form.get(field);
        if (!control.valid && control.dirty) {
            var errorMessage = this.createErrorMessagesFor(field, control.errors);
            this.errors.add(field, errorMessage);
        }
    };
    ValidationMessagesService.prototype.createErrorMessagesFor = function (attribute, errors) {
        return new index_2.MessageParser(errors, this.validationMessagesRules).parse(attribute);
    };
    ValidationMessagesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.ValidationMessagesLoader])
    ], ValidationMessagesService);
    return ValidationMessagesService;
}());
exports.ValidationMessagesService = ValidationMessagesService;
//# sourceMappingURL=validation-messages.service.js.map