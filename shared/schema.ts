import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const tournaments = pgTable("tournaments", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  dateLocation: text("date_location").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const coachingLocations = pgTable("coaching_locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  sport: text("sport").notNull(),
  logoUrl: text("logo_url").notNull(),
});

export const insertTournamentSchema = createInsertSchema(tournaments).omit({ id: true });
export const insertCoachingLocationSchema = createInsertSchema(coachingLocations).omit({ id: true });

export type Tournament = typeof tournaments.$inferSelect;
export type InsertTournament = z.infer<typeof insertTournamentSchema>;

export type CoachingLocation = typeof coachingLocations.$inferSelect;
export type InsertCoachingLocation = z.infer<typeof insertCoachingLocationSchema>;
