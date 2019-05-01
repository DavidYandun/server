const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_organism');
        return knexQuery;
    },
    getOne(organismid) {
        return knex('em_tab_dwc_organism').where('organismid', organismid).first();
    },
    getOneId(identificationid) {
        return knex('em_tab_dwc_organism').where('identificationid', identificationid).first();
    },
    create(organism) {
        return knex('em_tab_dwc_organism').insert(organism, '*');
    },
    update(organismid, organisms) {
        return knex('em_tab_dwc_organism').where('organismid', organismid).update(organisms, '*');
    },
    delete(organismid) {
        return knex('em_tab_dwc_organism').where('organismid', organismid).del();
    }
}