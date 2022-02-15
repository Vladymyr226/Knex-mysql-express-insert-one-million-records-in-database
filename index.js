const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/db.js");
const faker = require('faker'); //https://github.com/faker-js/faker, version 5.5.0 work, more - no.
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const SERVER_PORT = 8080;


app.get("/", async (req, res) => {
  res.send("HI, Volodya!!!");

  for (let index = 0; index < 10; index++) {
    await db('Products').insert({ ProductName: "Banana"})
  }
  console.log("/ done");
})


// app.post("/batch", async (req, res) => {
//   const rows = [];
//   const chunkSize = 1000;

//   for (let index = 0; index < chunkSize; index++) {
//     rows.push({ Price: faker.commerce.price(), Quantity: faker.datatype.number(), Units: faker.finance.currencySymbol() }
//     )
//   }
//   db.batchInsert('Ceil', rows, chunkSize)
//     .returning('id')
//     .then(function (ids) { console.log("Yes"); })
//     .catch(function (error) { console.log("No") });
// });

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening at http://localhost:${SERVER_PORT}`)
});