const express = require("express");
const Book = require("./models/books_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "books" });
});

app.get("/api/v1/books", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

app.post("/api/v1/books", async (req, res) => {
  const book = req.body
  const savedBook = await Book.create(book);
  res.json(savedBook);
});

module.exports = app;
