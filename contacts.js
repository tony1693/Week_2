"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var person_1 = require("./person");
var persona4 = new person_1.Person("tony", 30, "c/guada");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        return this.people;
    };
    return Contacts;
}());
exports.Contacts = Contacts;
