import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  varchar,
  timestamp,
  text,
  boolean,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as z from "zod";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  role: text("role", { enum: ["admin", "editor", "user"] })
    .notNull()
    .default("user"),

  status: boolean("status").default(true).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .default(sql`NOW()`)
    .notNull(),
});

// schema for inserting a user
export const userInsertSchema = createInsertSchema(usersTable, {
  role: z.enum(["admin", "editor", "user"]),
});
export const userSelectSchema = createSelectSchema(usersTable);
export type userSelectType = z.infer<typeof userSelectSchema>;
