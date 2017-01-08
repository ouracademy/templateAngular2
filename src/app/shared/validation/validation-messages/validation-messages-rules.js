"use strict";
var ValidationMessagesRules = (function () {
    function ValidationMessagesRules(validationMessagesRules) {
        this.validationMessagesRules = validationMessagesRules;
    }
    ValidationMessagesRules.prototype.getAttributePlaceHolder = function (attribute) {
        if (this.containsCustomAttribute(attribute)) {
            return this.getCustomAttributes(attribute);
        }
        return attribute;
    };
    ValidationMessagesRules.prototype.getErrorMessage = function (errorKey) {
        if (errorKey === 'customAttributes') {
            throw new SyntaxError('customAttributes is reserved');
        }
        return this.validationMessagesRules[errorKey];
    };
    ValidationMessagesRules.prototype.containsCustomAttribute = function (attribute) {
        return !!this.getCustomAttributes(attribute);
    };
    ValidationMessagesRules.prototype.getCustomAttributes = function (attribute) {
        return this.customAttributes[attribute];
    };
    Object.defineProperty(ValidationMessagesRules.prototype, "customAttributes", {
        get: function () {
            return this.validationMessagesRules['customAttributes'];
        },
        enumerable: true,
        configurable: true
    });
    return ValidationMessagesRules;
}());
exports.ValidationMessagesRules = ValidationMessagesRules;
//# sourceMappingURL=validation-messages-rules.js.map