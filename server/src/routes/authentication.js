const express = require("express");
const session = require("express-session");
const cors = require("cors");
const router = express.Router();
const pool = require("../database");
const { isLoggedIn } = require("../lib/auth");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
router.use(cookieParser());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

router.use(
  cors({
    origin: ["http://127.0.0.1:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
// SIGNUP
router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err);
    }
    pool.query(
      "INSERT INTO users (email, password) VALUES (?,?);",
      [email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

// SINGIN
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  pool.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          const id = result[0].id;
          const token = jwt.sign({ id }, "sErIOUssEcrEt", {
            expiresIn: 600,
          });
          req.session.user = result;
          res.json({ auth: true, token: token, result: result }); //everything is sent (even password!!!)
        } else {
          res.send({ auth: false, message: "wrong user-password combination" });
        }
      });
    } else {
      res.send({ auth: false, message: "no user exist" });
    }
  });
});

router.get("/signin", (req, res) => {
  if (req.session.user) {
    res.send({ signedIn: true, user: req.session.user });
  } else {
    res.send({ signedIn: false });
  }
});

router.get("/isUserAuth", isLoggedIn, (req, res) => {
  res.send("siii tas dentro, felicidades");
});

module.exports = router;
