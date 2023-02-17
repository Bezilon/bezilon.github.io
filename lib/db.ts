import { Pool } from "pg";

const client = new Pool({
  user: process.env.PGSQL_USER,
  password: process.env.PGSQL_PASSWORD,
  host: process.env.PGSQL_HOST,
  port: parseInt(process.env.PGSQL_PORT || '0'),
  database: process.env.PGSQL_DATABASE,
});

export default client;