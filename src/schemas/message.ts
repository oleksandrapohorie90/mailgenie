// src/schemas/message.ts
import { z } from "zod";

export const ChatBotMessageSchema = z.object({
  message: z.string().min(1, "Message is required"),
});

export type ChatBotMessageSchemaType = z.infer<typeof ChatBotMessageSchema>;
