import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const PlaylistSchema = pgTable("Playlists", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  cover: text().notNull(),
  sounds: text().notNull(),
});