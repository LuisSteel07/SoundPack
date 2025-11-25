import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const SoundSchema = pgTable("Sounds", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  cover: text().notNull(),
});