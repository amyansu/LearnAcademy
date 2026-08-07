import { integer, pgTable, varchar, text, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum('role', ['candidate', 'admin']);

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  role: roleEnum("role").notNull()
});

export const candidateTable = pgTable("candidate", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  candidate_id: integer("candidate_id").notNull().references(() => usersTable.id),
})

export const recruiterTable = pgTable("recruiter", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  recruiter_id: integer("recruiter_id").notNull().references(() => usersTable.id),
})