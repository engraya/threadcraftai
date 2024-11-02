// export default {
//   dialect: "postgresql",
//   schema: "./utils/db/schema.ts",
//   out: "./drizzle",

//   dbCredentials: {
//     url: "postgresql://zerotohero_owner:SPVe2rokvBf6@ep-bitter-shadow-a5lbwa60.us-east-2.aws.neon.tech/threadcraft?sslmode=require",
//     connectionString:
//       "postgresql://zerotohero_owner:SPVe2rokvBf6@ep-bitter-shadow-a5lbwa60.us-east-2.aws.neon.tech/threadcraft?sslmode=require",
//   },
// };


import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: "./utils/db/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  
});