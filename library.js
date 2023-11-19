"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var book_1 = require("./book");
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = [];
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddress = function (newAddress) {
        return this.address = newAddress;
    };
    Library.prototype.setManager = function (newManager) {
        return this.manager = newManager;
    };
    Library.prototype.toString = function () {
        return this.books;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var _this = this;
        return this.books.filter(function (book) { return _this.books.toString() === author; });
    };
    return Library;
}());
exports.Library = Library;
var author = new book_1.Book("el quijote", 500, "Wep", "Miguel de Cervantes", "anaya");
