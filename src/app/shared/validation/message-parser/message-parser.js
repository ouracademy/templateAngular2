"use strict";
var MessageParser = (function () {
    function MessageParser(errors, validationMessagesRules) {
        this.errors = errors;
        this.validationMessagesRules = validationMessagesRules;
        this.errorKey = Object.keys(errors)[0];
    }
    MessageParser.prototype.parse = function (attribute) {
        return this.parseAttributePlaceHolders(attribute).parseErrorPlaceholders();
    };
    MessageParser.prototype.parseAttributePlaceHolders = function (attribute) {
        var attributePlaceHolder = this.validationMessagesRules
            .getAttributePlaceHolder(attribute);
        this.errorMessage = this.validationMessagesRules
            .getErrorMessage(this.errorKey)
            .replace(':attribute', attributePlaceHolder);
        return this;
    };
    MessageParser.prototype.parseErrorPlaceholders = function () {
        return ErrorPlaceholderParser.parse(this.errorMessage).with(this.errorKey, this.errors);
    };
    return MessageParser;
}());
exports.MessageParser = MessageParser;
var ErrorPlaceholderParser = (function () {
    function ErrorPlaceholderParser(errorMessage) {
        this.errorMessage = errorMessage;
    }
    ErrorPlaceholderParser.parse = function (errorMessage) {
        return new ErrorPlaceholderParser(errorMessage);
    };
    ErrorPlaceholderParser.prototype.with = function (errorKey, error) {
        this.error = error;
        var errorFormatRule = ErrorFormatRuleLoader.get(errorKey, error);
        this.errorMessage = this.parseErrorMessage(errorFormatRule);
        return this.errorMessage;
    };
    ErrorPlaceholderParser.prototype.parseErrorMessage = function (errorFormatRule) {
        var _this = this;
        if (errorFormatRule.placeholders) {
            return Object.keys(errorFormatRule.placeholders)
                .map(function (placeholder) {
                var valueRule = errorFormatRule.placeholders[placeholder];
                var errorValue = _this.error[errorFormatRule.errorKey][valueRule];
                return _this.errorMessage.replace(placeholder, errorValue);
            })[0];
        }
        else {
            return this.errorMessage;
        }
    };
    return ErrorPlaceholderParser;
}());
var ErrorFormatRuleLoader = (function () {
    function ErrorFormatRuleLoader() {
    }
    ErrorFormatRuleLoader.get = function (errorKey, error) {
        var errorPlaceholder = ErrorFormatRuleLoader.errorFormatRule.find(function (x) { return x.errorKey === errorKey; });
        if (errorPlaceholder) {
            return errorPlaceholder;
        }
        throw SyntaxError("The " + errorKey + " isn't a validation rule");
    };
    ErrorFormatRuleLoader.errorFormatRule = [
        {
            errorKey: 'minlength',
            placeholders: {
                ':min': 'requiredLength'
            }
        },
        {
            errorKey: 'maxlength',
            placeholders: {
                ':max': 'requiredLength'
            }
        },
        { errorKey: 'required' },
        { errorKey: 'pattern' }
    ];
    return ErrorFormatRuleLoader;
}());
//# sourceMappingURL=message-parser.js.map