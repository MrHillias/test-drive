const { Sequelize } = require("sequelize");

module.exports = new Sequelize("db_invites_test", "root", "Fud5e@$$", {
  host: "79.174.88.208",
  port: "15420",
  dialect: "postgres",
});
