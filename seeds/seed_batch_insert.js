exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bebra').del()
    .then(async function () {
      const rows = [];
      const chunkSize = 10000;

      for (let index = 0; index < chunkSize; index++) {
        rows.push({ price: 100724, name: "Volodya" }
        )
      }
      await knex.batchInsert('bebra', rows, chunkSize)
        .returning('id')
        .then(function (ids) { console.log("Yes"); })
        .catch(function (error) { console.log("No") });
    });
};