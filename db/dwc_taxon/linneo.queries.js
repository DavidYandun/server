const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_linneo');
        return knexQuery;
    },
    getOne(lineoid) {
        return knex('em_tab_dwc_linneo').where('lineoid', lineoid).first();
    },
    create(lineoid) {
        return knex('em_tab_dwc_linneo').insert(lineoid, '*');
    },
    update(lineoid, linneos) {
        return knex('em_tab_dwc_linneo').where('lineoid', lineoid).update(linneos, '*');
    },
    delete(lineoid) {
        return knex('em_tab_dwc_linneo').where('lineoid', lineoid).del();
    }
}