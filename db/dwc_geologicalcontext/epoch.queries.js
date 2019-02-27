const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_epoch');
        return knexQuery;
    },
    getOne(name) {
        return knex('em_tab_dwc_epoch').where('name', name).first();
    },
    create(epoch) {
        return knex('em_tab_dwc_epoch').insert(epoch, '*');
    },
    update(name, epochs) {
        return knex('em_tab_dwc_epoch').where('name', name).update(epochs, '*');
    },
    delete(name) {
        return knex('em_tab_dwc_epoch').where('name', name).del();
    }
}