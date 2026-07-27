import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
  __arenaNextJsPostgresqlDb?: NodePgDatabase;
};

let cachedDb: NodePgDatabase | null = globalForDb.__arenaNextJsPostgresqlDb ?? null;

function getDb(): NodePgDatabase {
  if (cachedDb) return cachedDb;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    // Thrown only when the DB is actually used at runtime — never at import/build time.
    throw new Error("DATABASE_URL is required");
  }

  const pool =
    globalForDb.__arenaNextJsPostgresqlPool ??
    new Pool({ connectionString: databaseUrl });

  const instance = drizzle(pool);

  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsPostgresqlPool = pool;
    globalForDb.__arenaNextJsPostgresqlDb = instance;
  }

  cachedDb = instance;
  return instance;
}

/**
 * Lazily-initialised Drizzle client. The underlying connection is only created
 * the first time a query method is called, so importing this module never throws
 * during the Vercel build (page-data collection) when DATABASE_URL is absent.
 */
export const db = new Proxy({} as NodePgDatabase, {
  get(_target, prop, receiver) {
    const instance = getDb();
    const value = Reflect.get(instance as object, prop, receiver);
    return typeof value === "function" ? value.bind(instance) : value;
  },
}) as NodePgDatabase;
