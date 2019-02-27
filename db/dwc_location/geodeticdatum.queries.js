const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_geodeticdatum');
        return knexQuery;
    },
    getOne(geodeticdatum) {
        return knex('em_tab_dwc_geodeticdatum').where('geodeticdatum', geodeticdatum).first();
    },
    create(geodeticdatum) {
        return knex('em_tab_dwc_geodeticdatum').insert(geodeticdatum, '*');
    },
    update(geodeticdatum, geodeticdatums) {
        return knex('em_tab_dwc_geodeticdatum').where('geodeticdatum', geodeticdatum).update(geodeticdatums, '*');
    },
    delete(geodeticdatum) {
        return knex('em_tab_dwc_geodeticdatum').where('geodeticdatum', geodeticdatum).del();
    }
}