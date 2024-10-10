import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://waste-managment_owner:fHUKs7SDZ3Ax@ep-frosty-tree-a5wqvxzr.us-east-2.aws.neon.tech/waste-managment?sslmode=require"
);
export const db = drizzle(sql, { schema });
