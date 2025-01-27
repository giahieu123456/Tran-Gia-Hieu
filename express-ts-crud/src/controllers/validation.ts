import { z } from "zod";

export const getAllQuerySchema = z.object({
  take: z.coerce.number().int().optional(),
  skip: z.coerce.number().int().optional(),
  search: z.string().optional(),
  columnSort: z.string().optional(),
  valueSort: z.enum(["asc", "desc"]).optional(),
});

export const idQuerySchema = z.object({
  id: z.string(),
});

export const createResourceSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters"),
  description: z
    .string()
    .max(255, "Description must be at most 255 characters")
    .optional(),
});
