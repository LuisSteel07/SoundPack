import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schemas";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.LOCAL_DATABASE_URL,
});

export * as DrizzleORM from "drizzle-orm";
export const db = drizzle(pool, { schema });
