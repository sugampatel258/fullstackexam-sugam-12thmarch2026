import { knex } from "knex";
import { Model } from "objection";
import knexConfig from "../knexfile";

const db = knex(knexConfig.development);
Model.knex(db);
// All model can access the database.

export default db;
