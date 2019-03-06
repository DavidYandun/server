const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_phylum');
        return knexQuery;
    },
    getOne(phylum) {
        return knex('em_tab_dwc_phylum').where('phylum', phylum).first();
    },
    create(phylum) {
        return knex('em_tab_dwc_phylum').insert(phylum, '*');
    },
    update(phylum, phylums) {
        return knex('em_tab_dwc_phylum').where('phylum', phylum).update(phylums, '*');
    },
    delete(phylum) {
        return knex('em_tab_dwc_phylum').where('phylum', phylum).del();
    }
}