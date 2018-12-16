
exports.seed = function (knex, Promise) {
    return knex('users').insert([
        {
            id: 1, /* it auto increments, but we have to specify so we can properly link our notes */
            username: 'tom',
            email: 'tom@email.com',
            password: '12345',
        },
        {
            id: 2,
            username: 'kara',
            full_name: 'Kara Lynn grace',
            email: 'kara@email.com',
            password: '12345',
        },
        {
            id: 3,
            username: 'jojo',
            full_name: 'Jojo Bizarro',
            email: 'jojo@email.com',
            password: '12345',
        },
    ]);
};
