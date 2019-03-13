const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_municipality');
        return knexQuery;
    },
    getFilter(county) {
        const knexQuery = knex('em_tab_dwc_municipality')
        .where('county',county);
        return knexQuery;
    },
    getOne(municipality) {
        return knex('em_tab_dwc_municipality').where('municipality', municipality).first();
    },
    create(municipality) {
        return knex('em_tab_dwc_municipality').insert(municipality, '*');
    },
    update(municipality, municipalitys) {
        return knex('em_tab_dwc_municipality').where('municipality', municipality).update(municipalitys, '*');
    },
    delete(municipality) {
        return knex('em_tab_dwc_municipality').where('municipality', municipality).del();
    }
}