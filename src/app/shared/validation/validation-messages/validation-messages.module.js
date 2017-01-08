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
var validation_messages_service_1 = require('./validation-messages.service');
var index_1 = require('./loader/index');
function messageLoaderFactory() {
    return new index_1.MessageStaticLoader;
}
exports.messageLoaderFactory = messageLoaderFactory;
var ValidationMessagesModule = (function () {
    function ValidationMessagesModule() {
    }
    ValidationMessagesModule.forRoot = function (providedLoader) {
        if (providedLoader === void 0) { providedLoader = {
            provide: index_1.ValidationMessagesLoader,
            useFactory: messageLoaderFactory
        }; }
        return {
            ngModule: ValidationMessagesModule,
            providers: [providedLoader, validation_messages_service_1.ValidationMessagesService]
        };
    };
    ValidationMessagesModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], ValidationMessagesModule);
    return ValidationMessagesModule;
}());
exports.ValidationMessagesModule = ValidationMessagesModule;
//# sourceMappingURL=validation-messages.module.js.map