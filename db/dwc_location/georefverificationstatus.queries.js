const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_georefverification_status');
        return knexQuery;
    },
    getOne(georeferenceverificationstatus) {
        return knex('em_tab_dwc_georefverification_status').where('georeferenceverificationstatus', georeferenceverificationstatus).first();
    },
    create(georeferenceverificationstatus) {
        return knex('em_tab_dwc_georefverification_status').insert(georeferenceverificationstatus, '*');
    },
    update(georeferenceverificationstatus, georeferenceverificationstatuss) {
        return knex('em_tab_dwc_georefverification_status').where('georeferenceverificationstatus', georeferenceverificationstatus).update(georeferenceverificationstatuss, '*');
    },
    delete(georeferenceverificationstatus) {
        return knex('em_tab_dwc_georefverification_status').where('georeferenceverificationstatus', georeferenceverificationstatus).del();
    }
}