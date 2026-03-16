import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      ssl: {
        rejectUnauthorized: false,
      },
    },

    migrations: {
      directory: "./src/db/migrations",
    },

    seeds: {
      directory: "./src/db/seeds",
    },
  },
};

export default config;
