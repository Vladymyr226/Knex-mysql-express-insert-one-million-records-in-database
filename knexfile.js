require("dotenv").config()
const path = require("path")

console.log(
  process.env.DATABASE,
  process.env.USER_NAME,
  process.env.PASSWORD,
  process.env.HOST,
  process.env.PORT
)

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      host: process.env.HOST,
      port: process.env.PORT,
      insecureAuth: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, "./db/migrations"),
    },
    seeds: {
      directory: "./seeds",
    },
  },
}
