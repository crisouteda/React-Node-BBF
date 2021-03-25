const express = require("express");
const router = express.Router();
const pool = require("../database");
const bodyParser = require("body-parser");
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/get/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  const sqlInsert = "SELECT * FROM item WHERE user_id = ?";
  pool.query(sqlInsert, user_id, (err, result) => {
    res.send(result);
  });
});

router.post("/insert", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const user_id = req.body.user_id;
  const sqlInsert = "INSERT INTO item (title, author, user_id) VALUES (?,?,?)";
  pool.query(sqlInsert, [title, author, user_id], (err, result) => {
    res.send("Done");
  });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM item WHERE id = ?;";
  pool.query(sqlDelete, id, (err, result) => {
    res.send("Done");
    if (err) console.log(err);
  });
});

router.put("/update", (req, res) => {
  const id = req.body.id;
  const author = req.body.author;
  const sqlUpdate = "UPDATE item SET author = ? WHERE id = ?";
  pool.query(sqlUpdate, [author, id], (err, result) => {
    res.send("Done");
    if (err) console.log(err);
  });
});

module.exports = router;
