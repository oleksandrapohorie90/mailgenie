import { z } from "zod";

export const ConversationSearchSchema = z.object({
  domain: z.string().min(1, "Domain is required"),
});

export type ConversationSearchSchemaType = z.infer<typeof ConversationSearchSchema>;
