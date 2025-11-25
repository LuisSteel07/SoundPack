import z from "zod";

export const SourceSchema = z.object({
  id: z.number().int(),
  src: z.string(),
});

export type TSourceSchema = z.infer<typeof SourceSchema>;
