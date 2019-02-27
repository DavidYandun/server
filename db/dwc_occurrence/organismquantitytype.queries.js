const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_organismquantitytype');
        return knexQuery;
    },
    getOne(organismquantitytype) {
        return knex('em_tab_dwc_organismquantitytype').where('organismquantitytype', organismquantitytype).first();
    },
    create(organismquantitytype) {
        return knex('em_tab_dwc_organismquantitytype').insert(organismquantitytype, '*');
    },
    update(organismquantitytype, organismquantitytypes) {
        return knex('em_tab_dwc_organismquantitytype').where('organismquantitytype', organismquantitytype).update(organismquantitytypes, '*');
    },
    delete(organismquantitytype) {
        return knex('em_tab_dwc_organismquantitytype').where('organismquantitytype', organismquantitytype).del();
    }
}