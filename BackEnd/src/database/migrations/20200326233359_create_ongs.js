exports.up = function(knex) {
  knex.schema.createTable("ongs", function(tabble) {
    tabble.string("id").primary();
    tabble.string("name").notNullable();
    tabble.string("email").notNullable();
    tabble.string("whatsapp").notNullable();
    tabble.string("city").notNullable();
    tabble.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
