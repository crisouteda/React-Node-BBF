const express = require("express");
const router = express.Router();
const pool = require("../database");
const bodyParser = require("body-parser");
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/get", (req, res) => {
  const sqlInsert = " SELECT * FROM item";
  pool.query(sqlInsert, (err, result) => {
    res.send(result);
  });
});

router.post("/insert", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const sqlInsert = "INSERT INTO item (title, author) VALUES (?,?)";
  pool.query(sqlInsert, [title, author], (err, result) => {
    console.log("siiii tot be");
  });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM item WHERE id = ?;";
  pool.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err);
  });
});

router.put("/update", (req, res) => {
  const id = req.body.id;
  const author = req.body.author;
  const sqlUpdate = "UPDATE item SET author = ? WHERE id = ?";
  pool.query(sqlUpdate, [author, id], (err, result) => {
    if (err) console.log(err);
  });
});

module.exports = router;
