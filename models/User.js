const Yoink = require('./yoink');

class User extends Yoink {
    constructor() {
        super({ name: 'user', table: 'users', hasMany: 'notes' });
    }
}

module.exports = new User();
