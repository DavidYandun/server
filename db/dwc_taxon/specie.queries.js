const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_specie');
        return knexQuery;
    },
    getFilter(genus) {
        return knex('em_tab_dwc_specie').where('genus', genus);
    },
    getOne(specie) {
        return knex('em_tab_dwc_specie').where('specie', specie).first();
    },
    create(specie) {
        return knex('em_tab_dwc_specie').insert(specie, '*');
    },
    update(specie, species) {
        return knex('em_tab_dwc_specie').where('specie', specie).update(species, '*');
    },
    delete(specie) {
        return knex('em_tab_dwc_specie').where('specie', specie).del();
    }
}