const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_verification');
        return knexQuery;
    },
    getAllCurador() {
        const knexQuery = knex('em_tab_dwc_verification').andWhereNot('em_tab_dwc_verification.verificationstatus','APROBADO PARA PUBLICAR');
        return knexQuery;
    },
    getAllDigitador() {
        const knexQuery = knex('em_tab_dwc_verification').andWhere('em_tab_dwc_verification.verificationstatus','NUEVO REGISTRO');
        return knexQuery;
    },
    getOne(verificationstatus) {
        return knex('em_tab_dwc_verification').where('verificationstatus', verificationstatus).first();
    },
    create(verificationstatus) {
        return knex('em_tab_dwc_verification').insert(verificationstatus, '*');
    },
    update(verificationstatus, verifications) {
        return knex('em_tab_dwc_verification').where('verificationstatus', verificationstatus).update(verifications, '*');
    },
    delete(verificationstatus) {
        return knex('em_tab_dwc_verification').where('verificationstatus', verificationstatus).del();
    }
}