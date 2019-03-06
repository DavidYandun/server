const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_kingdom');
        return knexQuery;
    },
    getOne(kingdom) {
        return knex('em_tab_dwc_kingdom').where('kingdom', kingdom).first();
    },
    create(kingdom) {
        return knex('em_tab_dwc_kingdom').insert(kingdom, '*');
    },
    update(kingdom, kingdoms) {
        return knex('em_tab_dwc_kingdom').where('kingdom', kingdom).update(kingdoms, '*');
    },
    delete(kingdom) {
        return knex('em_tab_dwc_kingdom').where('kingdom', kingdom).del();
    }
}