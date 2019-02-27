const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_era');
        return knexQuery;
    },
    getOne(name) {
        return knex('em_tab_dwc_era').where('name', name).first();
    },
    create(era) {
        return knex('em_tab_dwc_era').insert(era, '*');
    },
    update(name, eras) {
        return knex('em_tab_dwc_era').where('name', name).update(eras, '*');
    },
    delete(name) {
        return knex('em_tab_dwc_era').where('name', name).del();
    }
}