// import { z } from "zod";

// export const ConversationSearchSchema = z.object({
//   domain: z.string().min(1, "Domain is required"),
// });

// export type ConversationSearchSchemaType = z.infer<typeof ConversationSearchSchema>;

import { z } from "zod"; //Zod library for schemas
import { ACCEPTED_FILE_TYPES, MAX_UPLOAD_SIZE } from "./settings.schema";

// Types for inference
export type ConversationSearchProps = {
  query: string;
  domain: string;
};

export type ConversationSearchSchemaType = z.infer<typeof ConversationSearchSchema>;

export type ChatBotMessageProps = {
  content?: string;
  image?: any;
};

// ✅ Conversation search input schema (used in useConversation)
export const ConversationSearchSchema = z.object({
  query: z.string().min(1, { message: "You must enter a search query" }),
  domain: z.string().min(1, { message: "You must select a domain" }),
});

export type ZodTypeConversationSearchProps = z.infer<typeof ConversationSearchSchema>;

// ✅ Chat message schema (used in useChatWindow)
export const ChatBotMessageSchema = z
  .object({
    content: z
      .string()
      .min(1)
      .optional()
      .or(z.literal("").transform(() => undefined)),
    image: z.any().optional(),
  })
  .refine((schema) => {
    if (schema.image?.length) {
      return (
        ACCEPTED_FILE_TYPES.includes(schema.image[0]?.type) &&
        schema.image[0]?.size <= MAX_UPLOAD_SIZE
      );
    }
    if (schema.content?.length) return true;
    return false;
  });

export type ZodTypeChatBotMessageProps = z.infer<typeof ChatBotMessageSchema>;
