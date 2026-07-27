import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 60 }),
  country: varchar("country", { length: 120 }),
  course: varchar("course", { length: 160 }),
  type: varchar("type", { length: 60 }).notNull().default("enquiry"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 200 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const aiepApplications = pgTable("aiep_applications", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 200 }).notNull(),
  passportNo: varchar("passport_no", { length: 80 }),
  nationality: varchar("nationality", { length: 120 }),
  age: varchar("age", { length: 10 }),
  street: varchar("street", { length: 255 }),
  city: varchar("city", { length: 120 }),
  postalCode: varchar("postal_code", { length: 40 }),
  state: varchar("state", { length: 120 }),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 60 }),
  contactApp: varchar("contact_app", { length: 40 }),
  contactId: varchar("contact_id", { length: 120 }),
  programme: varchar("programme", { length: 160 }),
  session: varchar("session", { length: 120 }),
  duration: varchar("duration", { length: 120 }),
  centre: varchar("centre", { length: 120 }),
  uniPlan: varchar("uni_plan", { length: 20 }),
  uniName: varchar("uni_name", { length: 200 }),
  documents: text("documents"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
export type AiepApplication = typeof aiepApplications.$inferSelect;
