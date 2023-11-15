"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        var resultado = currentYear - this.age;
        return resultado;
    };
    Person.prototype.setAddress = function (address) {
        return this.address = address;
    };
    Person.prototype.getAddress = function () {
        console.log(this.address);
    };
    return Person;
}());
exports.Person = Person;
