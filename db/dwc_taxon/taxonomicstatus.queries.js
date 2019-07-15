const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_taxonomicstatus');
        return knexQuery;
    },
    getAllTaxonomo() {
        const knexQuery = knex('em_tab_dwc_taxonomicstatus');
        return knexQuery;
    },
    getAllUsuario() {
        const knexQuery = knex('em_tab_dwc_taxonomicstatus').andWhereNot('taxonomicstatus','ACEPTADO');
        return knexQuery;
    },
    getOne(taxonomicstatus) {
        return knex('em_tab_dwc_taxonomicstatus').where('taxonomicstatus', taxonomicstatus).first();
    },
    create(taxonomicstatus) {
        return knex('em_tab_dwc_taxonomicstatus').insert(taxonomicstatus, '*');
    },
    update(taxonomicstatus, taxonomicstatuss) {
        return knex('em_tab_dwc_taxonomicstatus').where('taxonomicstatus', taxonomicstatus).update(taxonomicstatuss, '*');
    },
    delete(taxonomicstatus) {
        return knex('em_tab_dwc_taxonomicstatus').where('taxonomicstatus', taxonomicstatus).del();
    }
}