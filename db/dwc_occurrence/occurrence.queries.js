const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_occurrence');
        return knexQuery;
    },
    getOne(occurrenceid) {
        return knex('em_tab_dwc_occurrence').where('occurrenceid', occurrenceid).first();
    },
    getOneId(identificationid) {
        return knex('em_tab_dwc_occurrence').where('identificationid', identificationid).first();
    },
    create(occurrence) {
        return knex('em_tab_dwc_occurrence').insert(occurrence, '*');
    },
    update(occurrenceid, occurrences) {
        return knex('em_tab_dwc_occurrence').where('occurrenceid', occurrenceid).update(occurrences, '*');
    },
    delete(occurrenceid) {
        return knex('em_tab_dwc_occurrence').where('occurrenceid', occurrenceid).del();
    }
}