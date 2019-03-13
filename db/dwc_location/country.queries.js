const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_country');
        return knexQuery;
    },
    getOne(country) {
        return knex('em_tab_dwc_country').where('country', country).first();
    },
    create(country) {
        return knex('em_tab_dwc_country').insert(country, '*');
    },
    update(country, countrys) {
        return knex('em_tab_dwc_country').where('country', country).update(countrys, '*');
    },
    delete(country) {
        return knex('em_tab_dwc_country').where('country', country).del();
    }
}