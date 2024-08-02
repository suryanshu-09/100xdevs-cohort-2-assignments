const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("./.env");


function auth_middleware(req, res, next) {
  if (req.headers.username != "") {
    const auth = req.headers.authorization;
    const [method, token] = auth.split(' ');
    const verify = jwt.verify(token, SECRET_KEY);
    const username = req.headers.username;
    if (verify && username === verify.username) {
      next();
    } else {
      res.status(403).json({ msg: "Unauthorized" });
    }
  } else {
    res.status(403).json({ msg: "Unauthorized" });
  }

}


module.exports = {
  auth_middleware,
}
