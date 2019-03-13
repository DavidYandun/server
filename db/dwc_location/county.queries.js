const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_county');
        return knexQuery;
    },
    getFilter(stateprovince) {
        const knexQuery = knex('em_tab_dwc_county')
        .where('stateprovince',stateprovince);
        return knexQuery;
    },
    getOne(county) {
        return knex('em_tab_dwc_county').where('county', county).first();
    },
    create(county) {
        return knex('em_tab_dwc_county').insert(county, '*');
    },
    update(county, countys) {
        return knex('em_tab_dwc_county').where('county', county).update(countys, '*');
    },
    delete(county) {
        return knex('em_tab_dwc_county').where('county', county).del();
    }
}