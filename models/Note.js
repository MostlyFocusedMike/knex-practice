const Yoink = require('./yoink');

class Note extends Yoink {
    constructor() {
        super({ name: 'note', table: 'notes', belongsTo: 'user' });
    }
}

module.exports = new Note();
