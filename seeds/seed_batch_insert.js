exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("phone")
    .del()
    .then(async function () {
      const rows = []
      const chunkSize = 1000000

      for (let index = 0; index < chunkSize; index++) {
        rows.push({ price: 123, name: "Volodya" })
      }
      await knex
        .batchInsert("phone", rows, chunkSize)
        .returning("id")
        .then(function (ids) {
          console.log("Yes")
        })
        .catch(function (error) {
          console.log("No")
        })
    })
}
