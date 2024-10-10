export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts", // Adjusted path
    out: "./drizzle",
    dbCredentials: {
      url:   "postgresql://waste-managment_owner:fHUKs7SDZ3Ax@ep-frosty-tree-a5wqvxzr.us-east-2.aws.neon.tech/waste-managment?sslmode=require"
      ,
      connectionString:
      "postgresql://waste-managment_owner:fHUKs7SDZ3Ax@ep-frosty-tree-a5wqvxzr.us-east-2.aws.neon.tech/waste-managment?sslmode=require"
      ,
    },
  };
