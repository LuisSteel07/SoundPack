import dotenv from "dotenv";
dotenv.config();
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: [
    "./src/schemas/soundSchema.ts",
    "./src/schemas/playlistSchema.ts",
    "./src/schemas/sourceSchema.ts",
  ],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.LOCAL_DATABASE_URL!,
  },
});
