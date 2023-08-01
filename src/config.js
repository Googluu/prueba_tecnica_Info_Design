require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",
  isDev: process.env.NODE_ENV === "development",
  port: process.env.PORT || 4000,
  dbUser: process.env.MYSQL_USER,
  dbPassword: process.env.MYSQL_PASSWORD,
  dbHost: process.env.HOST,
  dbName: process.env.MYSQL_DATABASE,
  dbPort: process.env.PORT,
};

module.exports = { config };
