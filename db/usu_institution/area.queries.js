const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_usu_area');
        return knexQuery;
    },
    getOne(areaid) {
        return knex('em_tab_usu_area').where('areaid', areaid).first();
    },
    create(areaid) {
        return knex('em_tab_usu_area').insert(areaid, '*');
    },
    update(areaid, locations) {
        return knex('em_tab_usu_area').where('areaid', areaid).update(locations, '*');
    },
    delete(areaid) {
        return knex('em_tab_usu_area').where('areaid', areaid).del();
    }
}