const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_taxon');
        return knexQuery;
    },
    getOne(taxonid) {
        return knex('em_tab_dwc_taxon').where('taxonid', taxonid).first();
    },
    create(taxon) {
        return knex('em_tab_dwc_taxon').insert(taxon, '*');
    },
    update(taxonid, taxons) {
        return knex('em_tab_dwc_taxon').where('taxonid', taxonid).update(taxons, '*');
    },
    delete(taxonid) {
        return knex('em_tab_dwc_taxon').where('taxonid', taxonid).del();
    }
}