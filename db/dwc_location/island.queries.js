const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_island');
        return knexQuery;
    },
    getOne(island) {
        return knex('em_tab_dwc_island').where('island', island).first();
    },
    create(island) {
        return knex('em_tab_dwc_island').insert(island, '*');
    },
    update(island, islands) {
        return knex('em_tab_dwc_island').where('island', island).update(islands, '*');
    },
    delete(island) {
        return knex('em_tab_dwc_island').where('island', island).del();
    }
}