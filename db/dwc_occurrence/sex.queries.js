const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_sex');
        return knexQuery;
    },
    getOne(sex) {
        return knex('em_tab_dwc_sex').where('sex', sex).first();
    },
    create(sex) {
        return knex('em_tab_dwc_sex').insert(sex, '*');
    },
    update(sex, sexs) {
        return knex('em_tab_dwc_sex').where('sex', sex).update(sexs, '*');
    },
    delete(sex) {
        return knex('em_tab_dwc_sex').where('sex', sex).del();
    }
}