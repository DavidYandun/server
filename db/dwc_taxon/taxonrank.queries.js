const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_taxonrank');
        return knexQuery;
    },
    getOne(taxonrank) {
        return knex('em_tab_dwc_taxonrank').where('taxonrank', taxonrank).first();
    },
    create(taxonrank) {
        return knex('em_tab_dwc_taxonrank').insert(taxonrank, '*');
    },
    update(taxonrank, taxonranks) {
        return knex('em_tab_dwc_taxonrank').where('taxonrank', taxonrank).update(taxonranks, '*');
    },
    delete(taxonrank) {
        return knex('em_tab_dwc_taxonrank').where('taxonrank', taxonrank).del();
    }
}