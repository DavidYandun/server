const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_mul_type_media');
        return knexQuery;
    },
    getOne(typemedia) {
        return knex('em_tab_mul_type_media').where('typemedia', typemedia).first();
    },
    create(organism) {
        return knex('em_tab_mul_type_media').insert(organism, '*');
    },
    update(typemedia, typemedias) {
        return knex('em_tab_mul_type_media').where('typemedia', typemedia).update(typemedias, '*');
    },
    delete(typemedia) {
        return knex('em_tab_mul_type_media').where('typemedia', typemedia).del();
    }
}