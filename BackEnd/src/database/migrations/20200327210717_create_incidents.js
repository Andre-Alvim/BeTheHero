exports.up = function(knex) {
  knex.schema.createTable("incidents", function(tabble) {
    tabble.increments();

    tabble.string("titulo").notNullable();
    tabble.string("description").notNullable();
    tabble.decimal("value").notNullable();

    // Relacionando
    tabble.string("ong_id").notNullable();
    tabble
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
