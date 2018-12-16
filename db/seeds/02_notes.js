
exports.seed = function (knex, Promise) {
    return knex('notes').insert([
        {
            title: 'My math notes',
            content: 'Oh man math is neato.',
            user_id: 1,
        },
        {
            title: 'Chem notes',
            content: 'H20 is water.',
            user_id: 2,
        },
        {
            title: 'Vampires',
            content: 'Gotta say, not a huge fan of vampires.',
            user_id: 3,
        },
    ]);
};
