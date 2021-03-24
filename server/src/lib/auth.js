const jwt = require("jsonwebtoken");

module.exports = {
  isLoggedIn(req, res, next) {
    const token = req.headers["x-access-token"];
    if (!token) {
      res.send("I guess you need a token bb");
    } else {
      jwt.verify(token, "sErIOUssEcrEt", (err, decoded) => {
        if (err) {
          res.json({ auth: false, message: "you failed :(" });
        } else {
          req.userId = decoded.id;
          next();
        }
      });
    }
  },
};
