exports.up = function (knex) {
    return knex.schema
        .createTable('phone', function (table) {
            table.increments('id').primary();
            table.decimal('price').notNullable();
            table.string('name', 1000).notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("phone");
};

exports.config = { transaction: false };