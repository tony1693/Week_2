"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNpages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (newTitle) {
        return this.title = newTitle;
    };
    Book.prototype.setNpages = function (newNpages) {
        return this.nPages = newNpages;
    };
    Book.prototype.setIsbn = function (newIsbn) {
        return this.isbn = newIsbn;
    };
    Book.prototype.setAuthor = function (newAuthor) {
        return this.author = newAuthor;
    };
    Book.prototype.setEditorial = function (newEditorial) {
        return this.editorial = newEditorial;
    };
    Book.prototype.toString = function () {
        var libro = "Title - ".concat(this.title, "\n        Number of Pages - ").concat(this.nPages, "\n        ISBN - ").concat(this.isbn, "\n        Author - ").concat(this.author, "\n        Editorial - ").concat(this.editorial);
        return libro;
    };
    return Book;
}());
exports.Book = Book;
