import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned();
    table.decimal("total_amount", 10, 2);
    table.timestamp("created_at").defaultTo(knex.fn.now());

    table.foreign("user_id").references("users.id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("orders");
}
