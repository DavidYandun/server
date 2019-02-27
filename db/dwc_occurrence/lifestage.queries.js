const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_lifestage');
        return knexQuery;
    },
    getOne(lifestage) {
        return knex('em_tab_dwc_lifestage').where('lifestage', lifestage).first();
    },
    create(lifestage) {
        return knex('em_tab_dwc_lifestage').insert(lifestage, '*');
    },
    update(lifestage, lifestages) {
        return knex('em_tab_dwc_lifestage').where('lifestage', lifestage).update(lifestages, '*');
    },
    delete(lifestage) {
        return knex('em_tab_dwc_lifestage').where('lifestage', lifestage).del();
    }
}