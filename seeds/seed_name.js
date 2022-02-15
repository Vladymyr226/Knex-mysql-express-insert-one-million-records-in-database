/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

//Одиночная
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bebra').del()
    .then(async function () {
      for (let index = 0; index < 100; index++) {
        console.log("first")
        // Inserts seed entries
        await knex('bebra').insert([
          { price: 110, name: 'rowValue1' }
        ]);
      }
    });
};
