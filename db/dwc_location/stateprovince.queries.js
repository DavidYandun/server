const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_stateprovince');
        return knexQuery;
    },
    getFilter(country){
        const knexQuery=knex('em_tab_dwc_stateprovince')
        .where('country',country);
        return knexQuery;
    },
    getOne(stateprovince) {
        return knex('em_tab_dwc_stateprovince').where('stateprovince', stateprovince).first();
    },
    create(stateprovince) {
        return knex('em_tab_dwc_stateprovince').insert(stateprovince, '*');
    },
    update(stateprovince, stateprovinces) {
        return knex('em_tab_dwc_stateprovince').where('stateprovince', stateprovince).update(stateprovinces, '*');
    },
    delete(stateprovince) {
        return knex('em_tab_dwc_stateprovince').where('stateprovince', stateprovince).del();
    }
}