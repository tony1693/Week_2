"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var library_1 = require("./library");
var libro1 = new book_1.Book("el quijote", 500, "wep", "Miguel de Cervantes", "Anaya");
var libro2 = new book_1.Book("manolito gafotas", 300, "Google", "manolo", "Destino");
var libreria1 = new library_1.Library(book_1.Book[""], "Libra N3", "Luis");
libreria1.getNumberOfBooks();
libreria1.findByAuthor("manolo");
