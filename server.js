const hapi = require('hapi');

const User = require('./models/User');
const Note = require('./models/Note');

const server = new hapi.Server({
    host: 'localhost',
    port: 3201,
    routes: {
        cors: true,
    },
});

// quick test jot down to make sure cors worked
// function create(data) {
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     return fetch('http://localhost:3201/users/1/notes', options)
//         .then((response) => response.json())
//         .then(console.log)
// }


const start = async () => {
    server.route([
        {
            method: 'GET',
            path: '/notes',
            handler: async (request, h) => {
                return Note.getAll();
            },
        },
        {
            method: 'POST',
            path: '/notes',
            handler: async (request, h) => {
                return Note.create(request.payload);
            },
        },
        {
            method: 'DELETE',
            path: '/notes/{id}',
            handler: async (request, h) => {
                return Note.delete(request.params.id);
            },
        },
        {
            method: 'PUT',
            path: '/notes/{id}',
            handler: async (request, h) => {
                return Note.update(request.params.id, request.payload);
            },
        },
        {
            method: 'GET',
            path: '/users',
            handler: async (request, h) => {
                return User.getAll();
            },
        },
        {
            method: 'GET',
            path: '/users/{id}',
            handler: async (request, h) => {
                return User.getOne(request.params.id);
            },
        },
        { /* contrived example to show getOneBy */
            method: 'GET',
            path: '/usernames/{username}',
            handler: async (request, h) => {
                return User.getOneBy('username', request.params.username);
            },
        },
        {
            method: 'GET',
            path: '/user-notes/{id}',
            handler: async (request, h) => {
                return User.getManyFor(request.params.id);
            },
        },
        {
            method: 'GET',
            path: '/users/{id}/notes',
            handler: async (request, h) => {
                return Note.getBelongsToFor(request.params.id);
            },
        },
        {
            method: 'GET',
            path: '/newest-user',
            handler: async (request, h) => {
                return User.getNewestUser();
            },
        },
        {
            method: 'GET',
            path: '/longest-note',
            handler: async (request, h) => {
                return Note.getLongestNote();
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
