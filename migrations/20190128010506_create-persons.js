exports.up = function (knex, Promise) {
    /*return knex.schema.createTable('persons', (table) => {
        table.text('personid');
        table.text('name');
        table.text('lastname');
        table.text('cellphone');
        table.text('phone');    
        table.primary('personid');
    });*/
};

exports.down = function (knex, Promise) {
    //return knex.schema.dropTable('persons');
};