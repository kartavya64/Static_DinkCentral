import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedDatabase() {
  const existingTournaments = await storage.getTournaments();
  if (existingTournaments.length === 0) {
    const tournaments = [
      {
        title: "7th MP State Pickleball Tournament",
        dateLocation: "August 11–13, 2023 | The Emerald Heights International School, Indore",
        description: "A state-level championship organized by the MP Pickleball Association featuring competitive brackets for various age groups.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "Apratim 2023",
        dateLocation: "November 3–5, 2023 | Indore Institute of Science and Technology (IIST)",
        description: "An inter-school sports and cultural fest that featured pickleball as a major competitive sports league event for students.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "8th MP State Pickleball Tournament",
        dateLocation: "August 2024 | Indore, Madhya Pradesh",
        description: "The annual state-sanctioned tournament used to identify and rank the top pickleball talent across Madhya Pradesh.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "Apratim 2024",
        dateLocation: "October 22–24, 2024 | Indore Institute of Science and Technology (IIST)",
        description: "The 5th edition of Central India’s largest inter-school fest, incorporating a high-energy pickleball tournament for 11th and 12th-grade students.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "Pickle Paradise Tournament",
        dateLocation: "November 28–29, 2025 | Pickle Paradise & Cafe, Treasure Town Road, Indore",
        description: "A high-stakes open tournament featuring a ₹1 lakh prize pool, held at one of Indore's dedicated pickleball and cafe venues.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "Apratim 2025",
        dateLocation: "November 3–5, 2025 | Indore Institute of Science and Technology (IIST)",
        description: "Part of the \"Apratim-Pragya Pratispardha,\" focusing on boys' and girls' singles categories with a significant cash prize pool for winners.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "7th RYP National Ranking Tournament",
        dateLocation: "December 19–21, 2025 | Golden International School, Rau, Indore",
        description: "A premier AIPA-sanctioned national ranking event that brings together top-tier players from across India to compete for national points.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "NMIMS Intercollege Pickleball Tournament",
        dateLocation: "Scheduled during the Academic Session (Indore Campus) | NMIMS, Indore",
        description: "A collegiate-focused tournament designed to encourage the growth of pickleball among university students and local academic institutions.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "Pickleball Mega Open Tournament",
        dateLocation: "February (Annual Cycle) | Catalyst World School, Indore",
        description: "An open community tournament aimed at grassroots development, welcoming both amateur and experienced players in the region.",
        imageUrl: "@assets/default_1771658535869.jpg"
      },
      {
        title: "Moonstone Open Pickleball Tournament",
        dateLocation: "February 10–12, 2026 | Medi-Caps University, Indore",
        description: "A featured sports challenge within the \"Moonstone\" annual fest, often referred to as \"The Champions League\" for university athletes.",
        imageUrl: "@assets/default_1771658535869.jpg"
      }
    ];

    for (const t of tournaments) {
      await storage.createTournament(t);
    }
  }

  const existingLocations = await storage.getCoachingLocations();
  if (existingLocations.length === 0) {
    const locations = [
      {
        name: "Golden International School",
        sport: "pickleball",
        logoUrl: "@assets/golden_1771658535870.png"
      },
      {
        name: "Raja Ramanna Centre for Advanced Technology",
        sport: "pickleball",
        logoUrl: "@assets/rrcat_1771658535870.png"
      }
    ];

    for (const loc of locations) {
      await storage.createCoachingLocation(loc);
    }
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed the database on startup
  seedDatabase().catch(console.error);

  app.get(api.tournaments.list.path, async (_req, res) => {
    const tournamentsList = await storage.getTournaments();
    res.json(tournamentsList);
  });

  app.get(api.coachingLocations.list.path, async (_req, res) => {
    const locationsList = await storage.getCoachingLocations();
    res.json(locationsList);
  });

  return httpServer;
}
