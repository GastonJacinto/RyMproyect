const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      const access = {
        access: true,
      };
      return res.status(200).json(access);
    } else {
      const access = {
        access: false,
      };

      return res.status(200).json(access);
    }
  });
} 

module.exports = login;
