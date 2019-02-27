const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_identification');
        return knexQuery;
    },
    getOne(identificationid) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).first();
    },
    create(identificationid) {
        return knex('em_tab_dwc_identification').insert(identificationid, '*');
    },
    update(identificationid, identifications) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).update(identifications, '*');
    },
    delete(identificationid) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).del();
    }
}