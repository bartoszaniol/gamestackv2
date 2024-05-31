import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // "postgresql" | "mysql"
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
