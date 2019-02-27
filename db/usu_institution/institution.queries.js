const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_usu_institution');
        return knexQuery;
    },
    getOne(institutionid) {
        return knex('em_tab_usu_institution').where('institutionid', institutionid).first();
    },
    create(institutionid) {
        return knex('em_tab_usu_institution').insert(institutionid, '*');
    },
    update(institutionid, locations) {
        return knex('em_tab_usu_institution').where('institutionid', institutionid).update(locations, '*');
    },
    delete(institutionid) {
        return knex('em_tab_usu_institution').where('institutionid', institutionid).del();
    }
}