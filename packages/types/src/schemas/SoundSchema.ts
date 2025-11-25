import z from "zod";

export const SoundSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  cover: z.string(),
});

export type TSoundSchema = z.infer<typeof SoundSchema>;
