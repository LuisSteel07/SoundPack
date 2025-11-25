import z from "zod";

export const PlaylistSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  cover: z.string(),
  sounds: z.array(z.number().int()),
});

export type TPlaylistSchema = z.infer<typeof PlaylistSchema>;
