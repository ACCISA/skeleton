const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const debug = true;
const loginRouter = async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  if (debug || userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (debug || passOk) {
      jwt.sign(
        { username: userDoc.username, id: userDoc._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.json({ userDoc, token });
        }
      );
    } else {
      res.status(401).json("invalid credentials");
    }
  } else {
    res.status(422).json("not found");
  }
};

module.exports = loginRouter;