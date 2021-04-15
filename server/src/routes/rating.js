const express = require("express");
const router = express.Router();
const pool = require("../database");
const bodyParser = require("body-parser");
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/getAll", (req, res) => {
  const sqlGet =
    "SELECT item.id , item.title, item.author, users.username FROM item INNER JOIN users ON users.id = item.user_id;";
  pool.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

router.get("/getLikes/:id/:rate", (req, res) => {
  const item_id = req.params.id;
  const rate = req.params.rate;
  const sqlGet = "SELECT count(*) FROM rating where item_id = ? and rate = ?;";
  pool.query(sqlGet, [item_id, rate], (err, result) => {
    res.send(result);
  });
});

router.get("/setLike/:user/:item", (req, res) => {
  const item_id = req.params.item;
  const user_id = req.params.user;
  const sqlCount =
    "SELECT count(*) FROM rating WHERE item_id = ? AND user_id = ?;";
  pool.query(sqlCount, [item_id, user_id], (err, result) => {
    res.send(result);
  });
});

router.put("/updateLike", (req, res) => {
  const item_id = req.body.item_id;
  const user_id = req.body.user_id;
  const rate = req.body.rate;
  const sqlUpdate =
    "UPDATE rating SET rate = ? WHERE user_id = ? and item_id = ?;";
  pool.query(sqlUpdate, [rate, user_id, item_id], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

router.post("/insertLike", (req, res) => {
  const item_id = req.body.item_id;
  const user_id = req.body.user_id;
  const rate = req.body.rate;
  const sqlInsert =
    "INSERT INTO rating (user_id, item_id, rate) VALUES (?, ?, ?)";
  pool.query(sqlInsert, [user_id, item_id, rate], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
