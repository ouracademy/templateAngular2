"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TypedMessageBag = (function () {
    function TypedMessageBag() {
        this.messages = new Map();
    }
    TypedMessageBag.prototype.add = function (field, message) {
        if (this.has(field)) {
            var fieldMessages = this.get(field).add(message);
            this.messages.set(field, fieldMessages);
        }
        else {
            this.messages.set(field, new Set().add(message));
        }
    };
    Object.defineProperty(TypedMessageBag.prototype, "count", {
        get: function () {
            return this.messages.size;
        },
        enumerable: true,
        configurable: true
    });
    TypedMessageBag.prototype.first = function (field) {
        return this.get(field).values().next().value;
    };
    TypedMessageBag.prototype.get = function (field) {
        return this.messages.get(field);
    };
    TypedMessageBag.prototype.has = function (field) {
        return this.messages.has(field);
    };
    return TypedMessageBag;
}());
exports.TypedMessageBag = TypedMessageBag;
/** A reflective message bag */
var MessageBag = (function (_super) {
    __extends(MessageBag, _super);
    function MessageBag() {
        _super.apply(this, arguments);
    }
    MessageBag.prototype.add = function (field, message) {
        _super.prototype.add.call(this, field, message);
        this[field] = message;
    };
    return MessageBag;
}(TypedMessageBag));
exports.MessageBag = MessageBag;
//# sourceMappingURL=message-bag.js.map