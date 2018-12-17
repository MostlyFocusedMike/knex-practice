const knex = require('../db/knex');

class Yoink {
    constructor(model) {
        this.name = model.name;
        this.table = model.table;
        this.hasMany = model.hasMany;
        this.belongsTo = model.belongsTo;
    }

    async getAll() {
        return knex(this.table);
    }

    async getOne(id) {
        return knex(this.table).where('id', id).first();
    }

    async getOneBy(column, value) {
        return knex(this.table).where(column, value).first();
    }

    async create(entry) {
        return knex(this.table).insert(entry, '*');
    }

    async update(id, entry) {
        return knex(this.table).where('id', id).update(entry, '*');
    }

    async delete(id) {
        return knex(this.table).where('id', id).del();
    }

    async getManyFor(id) {
        const model = await this.getOne(id);
        const hasManies = await knex(this.hasMany).where(`${this.name}_id`, id);
        model[this.hasMany] = hasManies;
        return model;
    }

    async getBelongsToFor(id) {
        return knex(this.table).where(`${this.belongsTo}_id`, id);
    }
}

module.exports = Yoink;
