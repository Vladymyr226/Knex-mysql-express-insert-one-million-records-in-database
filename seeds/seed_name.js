/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//Одиночная вставка, без батча
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("phone")
    .del()
    .then(async function () {
      for (let index = 0; index < 80; index++) {
        // Inserts seed entries
        await knex("phone").insert([
          { price: 123, name: "Apple" },
        ])
      }
    })
}
