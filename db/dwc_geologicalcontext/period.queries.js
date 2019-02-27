const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_period');
        return knexQuery;
    },
    getOne(name) {
        return knex('em_tab_dwc_period').where('name', name).first();
    },
    create(period) {
        return knex('em_tab_dwc_period').insert(period, '*');
    },
    update(name, periods) {
        return knex('em_tab_dwc_period').where('name', name).update(periods, '*');
    },
    delete(name) {
        return knex('em_tab_dwc_period').where('name', name).del();
    }
}