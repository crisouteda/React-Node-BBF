const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const validator = require("express-validator");
const flash = require("connect-flash");
const MySQLStore = require("express-mysql-session")(session);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { database } = require("./keys");

// Intializations
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://127.0.0.1:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// Middlewares
app.use(morgan("dev"));
app.use(flash());
app.use(validator());

// Global variables
app.use((req, res, next) => {
  app.locals.message = req.flash("message");
  app.locals.success = req.flash("success");
  app.locals.user = req.user;
  next();
});

// Routes
app.use(require("./routes/index"));
app.use("/auth", require("./routes/authentication"));
app.use("/api", require("./routes/reviews"));
app.use("/like", require("./routes/rating"));

// Starting
app.set("port", process.env.PORT || 4000);

app.listen(process.env.PORT || app.get("port"), () => {
  console.log("Server is in port", app.get("port"));
});
