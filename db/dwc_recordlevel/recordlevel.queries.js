const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_record_level');
        return knexQuery;
    },
    getOne(recordlevelid) {
        return knex('em_tab_dwc_record_level').where('recordlevelid', recordlevelid).first();
    },
    getOneId(identificationid) {
        return knex('em_tab_dwc_record_level').where('identificationid', identificationid).first();
    },
    create(recordlevelid) {
        return knex('em_tab_dwc_record_level').insert(recordlevelid, '*');
    },
    update(recordlevelid, recordlevels) {
        return knex('em_tab_dwc_record_level').where('recordlevelid', recordlevelid).update(recordlevels, '*');
    },
    delete(recordlevelid) {
        return knex('em_tab_dwc_record_level').where('recordlevelid', recordlevelid).del();
    }
}