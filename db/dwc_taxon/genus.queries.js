const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_genus');
        return knexQuery;
    },
    getOne(genus) {
        return knex('em_tab_dwc_genus').where('genus', genus).first();
    },
    create(genus) {
        return knex('em_tab_dwc_genus').insert(genus, '*');
    },
    update(genus, genuss) {
        return knex('em_tab_dwc_genus').where('genus', genus).update(genuss, '*');
    },
    delete(genus) {
        return knex('em_tab_dwc_genus').where('genus', genus).del();
    }
}