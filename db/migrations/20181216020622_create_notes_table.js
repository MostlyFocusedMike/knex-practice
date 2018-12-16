
exports.up = function (knex, Promise) {
    return knex.schema.createTable('notes', function (table) {
        table.increments();
        table.integer('user_id').unsigned().notNullable(); // unsigned means the number won't be negative, so it can go higher
        table.string('title', 50);
        table.string('content');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.foreign('user_id').references('id').inTable('users');
    });
};


exports.down = function (knex, Promise) {
    return knex.schema.dropTable('notes');
};
