import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("order_items", (table) => {
    table.increments("id").primary();
    table.integer("order_id").unsigned();
    table.string("product_id");
    table.integer("quantity");
    table.decimal("price", 10, 2);

    table.foreign("order_id").references("orders.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("order_items");
}
