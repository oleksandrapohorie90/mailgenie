// import * as z from "zod";

// export const AddDomainSchema = z.object({
//   name: z
//     .string()
//     .min(1, "Domain name is required")
//     .regex(
//       /^([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
//       "Please enter a valid domain name (e.g., example.com)"
//     ),
//   icon: z.string().min(1, "Domain icon is required"),
//   campaignId: z.string().optional(),
// });

// export type AddDomainInput = z.infer<typeof AddDomainSchema>;

import * as z from "zod";

export const AddDomainSchema = z.object({
  name: z
    .string()
    .min(1, "Domain name is required")
    .regex(
      /^([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
      "Please enter a valid domain name (e.g., example.com)"
    ),
  icon: z.string().min(1, "Domain icon is required"),
  campaignId: z.string().optional(),
});

export type AddDomainInput = z.infer<typeof AddDomainSchema>;

// ✅ Add these constants for use in conversation schemas
export const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"];
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024; // 5MB
