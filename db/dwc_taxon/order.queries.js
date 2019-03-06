const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_order');
        return knexQuery;
    },
    getOne(order) {
        return knex('em_tab_dwc_order').where('order', order).first();
    },
    create(order) {
        return knex('em_tab_dwc_order').insert(order, '*');
    },
    update(order, orders) {
        return knex('em_tab_dwc_order').where('order', order).update(orders, '*');
    },
    delete(order) {
        return knex('em_tab_dwc_order').where('order', order).del();
    }
}