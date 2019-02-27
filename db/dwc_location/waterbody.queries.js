const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_waterbody');
        return knexQuery;
    },
    getOne(waterbody) {
        return knex('em_tab_dwc_waterbody').where('waterbody', waterbody).first();
    },
    create(waterbody) {
        return knex('em_tab_dwc_waterbody').insert(waterbody, '*');
    },
    update(waterbody, waterbodys) {
        return knex('em_tab_dwc_waterbody').where('waterbody', waterbody).update(waterbodys, '*');
    },
    delete(waterbody) {
        return knex('em_tab_dwc_waterbody').where('waterbody', waterbody).del();
    }
}