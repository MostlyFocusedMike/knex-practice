const hapi = require('hapi');

const server = new hapi.Server({
    host: 'localhost',
    port: 3201,
});

const start = async () => {
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: async (req, h) => {
                // await knex('users')
                //     .insert({ username: 'bill', email: 'hi@example.com', password: 'secret' });
                // const result = await knex('users');
                // knex.destroy();
                return { result: 'hi' };
            },
        },
    ]);
    try {
        await server.start();
        console.log(`Server started at ${server.info.uri}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();
