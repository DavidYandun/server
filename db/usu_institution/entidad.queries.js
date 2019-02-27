const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_usu_entidad');
        return knexQuery;
    },
    getOne(entidadid) {
        return knex('em_tab_usu_entidad').where('entidadid', entidadid).first();
    },
    create(entidadid) {
        return knex('em_tab_usu_entidad').insert(entidadid, '*');
    },
    update(entidadid, locations) {
        return knex('em_tab_usu_entidad').where('entidadid', entidadid).update(locations, '*');
    },
    delete(entidadid) {
        return knex('em_tab_usu_entidad').where('entidadid', entidadid).del();
    }
}