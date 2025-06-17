"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config(); // load .env
const { Pool } = require("pg");
const pool = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
});
// (async () => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     console.log("✅ Connected to PostgreSQL at:", result.rows[0].now);
//   } catch (err) {
//     console.error("❌ PostgreSQL connection error:", err);
//   }
// })();
exports.default = pool;
