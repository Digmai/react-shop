const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
console.log( req.body )
    // Username
    let user = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (user) {
      return res.status(400).send({
        message: "Имя пользователя уже используется!"
      });
    }
    // Email
    user = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (user) {
      return res.status(400).send({
        message: " Email уже используется!"
      });
    }
    next();
  } catch (error) {
    console.log('//==================='+ "//   checkDuplicateUsernameOrEmail // eq.body.username   //" +  req.body.username + '===================//')
    return res.status(500).send({
      message: `Не удалось подтвердить имя пользователя ! ${error }`});

  }
};
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Роли не существует = " + req.body.roles[i]
        });
        return;
      }
    }
  }

  next();
};
const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};
module.exports = verifySignUp;
