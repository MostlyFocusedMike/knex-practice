const Yoink = require('./yoink');
const knex = require('../db/knex');

class User extends Yoink {
    async getNewestUser() {
        const newestUser = (await knex(this.table).orderBy('created_at', 'desc').limit(1))[0];
        return { newestUser };
    }
}

module.exports = new User({ name: 'user', hasMany: 'notes' });
