const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username) => {
  let same_users = users.filter(el => el.username == username)
  return same_users.length == 0;
}

const authenticatedUser = (username, password) => { //returns boolean
  let same_users = users.filter(el => el.username == username && el.password == password)
  return same_users.length > 0;
}

//only registered users can login
regd_users.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!password || !username) {
    return res.status(404).json({ message: "Body Empty" });
  }
  if (!authenticatedUser(username, password)) {
    return res.status(404).json({ message: "Invalid user" });
  }

  let accessToken = jwt.sign({
    username: username,
    password: password
  }, 'access', { expiresIn: 60 * 60 });

  req.session.authorization = {
    accessToken
  }
  return res.status(200).send("User successfully logged in");
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const username = req.user.username;
  const isbn = req.params.isbn;
  books[isbn].reviews[username] = req.query.review;
  return res.status(200).json({ message: "Review was add/update" });
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
  const username = req.user.username;
  const isbn = req.params.isbn;
  delete books[isbn].reviews[username];
  return res.status(200).json({ message: "Review was deleted" });
})

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;