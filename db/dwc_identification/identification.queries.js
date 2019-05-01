const knex = require('../knex');

module.exports = {
    getAll() {
        const knexQuery = knex('em_tab_dwc_identification');
        return knexQuery;
    },
    getOne(identificationid) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).first();
    },
    create(identification) {
        return knex('em_tab_dwc_identification').insert(identification, '*');
    },
    update(identificationid, identifications) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).update(identifications, '*');
    },
    delete(identificationid) {
        return knex('em_tab_dwc_identification').where('identificationid', identificationid).del();
    },
    getCollection() {
        const knexQuery = knex('em_tab_dwc_identification')
            .leftJoin('em_tab_dwc_taxon', 'em_tab_dwc_identification.identificationid', 'em_tab_dwc_taxon.identificationid')
            .leftJoin('em_tab_mul_multimedia','em_tab_dwc_identification.identificationid', 'em_tab_mul_multimedia.identificationid')
            .where('em_tab_mul_multimedia.principal',true).orWhere('em_tab_mul_multimedia.principal',null)
            .select('em_tab_dwc_identification.identificationid', 'verificationstatus', 'identifiedby','kingdom','phylum','class' ,'order','family','genus','specie','taxonrank', 'scientificname', 'vernacularname',
               'url','em_tab_mul_multimedia.name as medianame');
        return knexQuery;
    },
    getReinos(kingdom){
        const knexQuery = knex('em_tab_dwc_identification')
        .leftJoin('em_tab_dwc_taxon', 'em_tab_dwc_identification.identificationid', 'em_tab_dwc_taxon.identificationid')
        .where('em_tab_dwc_taxon.kingdom',kingdom)
        .select('em_tab_dwc_identification.identificationid', 'identifiedby','kingdom','phylum','class' ,'order','family','genus','specie','taxonrank', 'scientificname', 'vernacularname');
        return knexQuery;
    }
}