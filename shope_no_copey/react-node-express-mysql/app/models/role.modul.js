const { INTEGER, STRING } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: INTEGER,
      primaryKey: true
    },
    name: {
      type: STRING
    }
  });
  return Role;
};
