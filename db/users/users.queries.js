const knex = require('../knex');

module.exports = {
    getAll(query) {
        const knexQuery = knex('em_tab_usu_users');
        if (query.email) {
            knexQuery.where('email', 'like', `%${query.email}%`);
        }
        return knexQuery;
    },

    getOne(userid) {
        return knex('em_tab_usu_users').where('userid', userid).first();
    },

    getOneByEmail: (email) => {
        return knex('em_tab_usu_users').where('email', email).first();
    },

    create: (user) => {
        return knex('em_tab_usu_users').insert(user, 'userid').then(ids => {
            return ids[0];
        });
    },

    update(userid, user) {
        return knex('em_tab_usu_users').where('userid', userid).update(user,'*');
    },

    delete(userid) {
        return knex('em_tab_usu_users').where('userid', userid).del();
    },

    getAllWithRol(query) {
        //const knexQuery = knex('em_tab_usu_users');
        //const knexQuery = knex.from('em_tab_usu_users').innerJoin('em_tab_usu_rols', 'em_tab_usu_users.rolid', 'em_tab_usu_rols.rolid');
        const knexQuery= knex('em_tab_usu_users')
        .join('em_tab_usu_rols','em_tab_usu_users.rolid','em_tab_usu_rols.rolid')
        .select('em_tab_usu_users.*','em_tab_usu_rols.name as rolname').orderBy('em_tab_usu_users.lastname');

        if (query.email) {
            knexQuery.where('email', 'like', `%${query.email}%`);
        }
        return knexQuery;
    },
}