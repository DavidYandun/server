const knex = require('./knex');

module.exports = {
    getAll(query) {
        const knexQuery = knex('sticker');
        return knexQuery;
    },
    getOne(id) {
        return knex('sticker').where('id', id).first();
    },
    create(sticker) {
        return knex('sticker').insert(sticker, '*');
    },
    update(id, sticker) {
        return knex('sticker').where('id', id).update(sticker, '*');
    },
    delete(id) {
        return knex('sticker').where('id', id).del();
    }
}