
exports.up = function(knex, Promise) {
    /*return knex.schema.createTable('users',(table)=>{
        table.increments('userid');
        table.integer('rolid');
        table.text('personid');
        table.text('email');
        table.text('password');
        table.boolean('status');
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.unique('email');
        table.foreign('rolid').references('rolid').inTable('rols');
        table.foreign('personid').references('personid').inTable('persons');
    });*/
};

exports.down = function(knex, Promise) {
    //return knex.schema.dropTable('users');
};
