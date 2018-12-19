const Yoink = require('./yoink');
const knex = require('../db/knex');

class Note extends Yoink {
    async getLongestNote() {
        /*
            knex can't really natively do somehting like:

                select *
                FROM notes
                ORDER BY LENGTH(content) // this is the trouble spot
                DESC LIMIT 1;

            you can use .raw alone, but it returns a lot of info,
            you only want the array of table rows,
            and then the first item in this case
        */
        // return (await knex.raw('select * FROM notes ORDER BY LENGTH(content) DESC LIMIT 1;')).rows[0];

        /* but remember, knex returns arrays of object,s which can easily be manipulated with js: */
        const notes = await knex(this.table);
        const longestNote = notes.sort((a, b) => b.content.length - a.content.length)[0];
        return { longestNote };
    }
}

module.exports = new Note({ name: 'note', belongsTo: 'user' });
