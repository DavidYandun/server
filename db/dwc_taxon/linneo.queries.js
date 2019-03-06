const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_linneo');
        return knexQuery;
    },
    getOne(lineoid) {
        return knex('em_tab_dwc_linneo').where('lineoid', lineoid).first();
    },
    getLinneo(lineoid) {
        const hijo='hijo';
        return knexQuery=knex('em_tab_dwc_linneo as A')
        .leftJoin('em_tab_dwc_linneo as B','A.lineofather','B.lineoid')
        .where('A.lineoid',lineoid)
        .select('A.*');
    },
    getLinneo1(lineoid){
        knex.withRecursive('em_tab_dwc_linneo', (qb) => {
            qb.select('*').from('em_tab_dwc_linneo').where('em_tab_dwc_linneo.lineoid', lineoid).union((qb) => {
              qb.select('*').from('em_tab_dwc_linneo').join('em_tab_dwc_linneo', 'em_tab_dwc_linneo.lineofather', 'em_tab_dwc_linneo.lineoid')
            })
          }).select('*').from('em_tab_dwc_linneo')
    },
    create(lineoid) {
        return knex('em_tab_dwc_linneo').insert(lineoid, '*');
    },
    update(lineoid, linneos) {
        return knex('em_tab_dwc_linneo').where('lineoid', lineoid).update(linneos, '*');
    },
    delete(lineoid) {
        return knex('em_tab_dwc_linneo').where('lineoid', lineoid).del();
    }

}