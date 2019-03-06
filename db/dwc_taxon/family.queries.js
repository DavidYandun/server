const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_family');
        return knexQuery;
    },
    getOne(family) {
        return knex('em_tab_dwc_family').where('family', family).first();
    },
    create(family) {
        return knex('em_tab_dwc_family').insert(family, '*');
    },
    update(family, familys) {
        return knex('em_tab_dwc_family').where('family', family).update(familys, '*');
    },
    delete(family) {
        return knex('em_tab_dwc_family').where('family', family).del();
    }
}