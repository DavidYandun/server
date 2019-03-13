const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_basisofrecord');
        return knexQuery;
    },
    getOne(basisofrecord) {
        return knex('em_tab_dwc_basisofrecord').where('basisofrecord', basisofrecord).first();
    },
    create(basisofrecord) {
        return knex('em_tab_dwc_basisofrecord').insert(basisofrecord, '*');
    },
    update(basisofrecord, basisofrecords) {
        return knex('em_tab_dwc_basisofrecord').where('basisofrecord', basisofrecord).update(basisofrecords, '*');
    },
    delete(basisofrecord) {
        return knex('em_tab_dwc_basisofrecord').where('basisofrecord', basisofrecord).del();
    }
}