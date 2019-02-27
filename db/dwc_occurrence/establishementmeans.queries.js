const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_establishementmeans');
        return knexQuery;
    },
    getOne(establishmentmeans) {
        return knex('em_tab_dwc_establishementmeans').where('establishmentmeans', establishmentmeans).first();
    },
    create(establishmentmeans) {
        return knex('em_tab_dwc_establishementmeans').insert(establishmentmeans, '*');
    },
    update(establishmentmeans, establishmentmeanss) {
        return knex('em_tab_dwc_establishementmeans').where('establishmentmeans', establishmentmeans).update(establishmentmeanss, '*');
    },
    delete(establishmentmeans) {
        return knex('em_tab_dwc_establishementmeans').where('establishmentmeans', establishmentmeans).del();
    }
}