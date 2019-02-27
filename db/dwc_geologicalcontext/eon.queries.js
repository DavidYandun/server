const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_eon');
        return knexQuery;
    },
    getOne(name) {
        return knex('em_tab_dwc_eon').where('name', name).first();
    },
    create(eon) {
        return knex('em_tab_dwc_eon').insert(eon, '*');
    },
    update(name, eons) {
        return knex('em_tab_dwc_eon').where('name', name).update(eons, '*');
    },
    delete(name) {
        return knex('em_tab_dwc_eon').where('name', name).del();
    }
}