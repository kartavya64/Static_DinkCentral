import { db } from "./db";
import { tournaments, coachingLocations } from "@shared/schema";
import type { Tournament, InsertTournament, CoachingLocation, InsertCoachingLocation } from "@shared/schema";

export interface IStorage {
  getTournaments(): Promise<Tournament[]>;
  createTournament(tournament: InsertTournament): Promise<Tournament>;
  
  getCoachingLocations(): Promise<CoachingLocation[]>;
  createCoachingLocation(location: InsertCoachingLocation): Promise<CoachingLocation>;
}

export class DatabaseStorage implements IStorage {
  async getTournaments(): Promise<Tournament[]> {
    return await db.select().from(tournaments);
  }

  async createTournament(tournament: InsertTournament): Promise<Tournament> {
    const [result] = await db.insert(tournaments).values(tournament).returning();
    return result;
  }

  async getCoachingLocations(): Promise<CoachingLocation[]> {
    return await db.select().from(coachingLocations);
  }

  async createCoachingLocation(location: InsertCoachingLocation): Promise<CoachingLocation> {
    const [result] = await db.insert(coachingLocations).values(location).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
