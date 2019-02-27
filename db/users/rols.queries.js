const knex = require('../knex');

module.exports = {
    getAll(query) {
        const knexQuery = knex('em_tab_usu_rols');
        if (query.name) {
            knexQuery.where('name', 'like', `%${query.name}%`);  
        }
        return knexQuery;
    },
    getOne(rolid) {
        return knex('em_tab_usu_rols').where('rolid', rolid).first();
    },
    create(rols) {
        return knex('em_tab_usu_rols').insert(rols, '*');
    },
    update(rolid, rols) {
        return knex('em_tab_usu_rols').where('rolid', rolid).update(rols, '*');
    },
    delete(rolid) {
        return knex('em_tab_usu_rols').where('rolid', rolid).del();
    }
}