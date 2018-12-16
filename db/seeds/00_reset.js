
exports.seed = async function (knex, Promise) {
    // Deletes ALL existing entries
    // must go in reverse order of creation so you don't disrupt foreign key dependencies
    await knex('notes').del();
    await knex('users').del();
};
