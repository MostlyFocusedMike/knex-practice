exports.up = function (knex, Promise) {
    return knex.schema.table('users', function (table) {
        table.string('email');
        table.string('full_name');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.table('users', function (table) {
        table.dropColumns('email', 'full_name');
    });
};
