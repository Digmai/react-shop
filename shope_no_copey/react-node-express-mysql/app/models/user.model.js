const { STRING } = require("sequelize");
const Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: STRING
      },
      email: {
        type: STRING
      },
      password: {
        type: STRING
      }
    });
    return User;
  };