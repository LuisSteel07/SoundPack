import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const SourceSchema = pgTable("Source", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  src: text().notNull(),
});
