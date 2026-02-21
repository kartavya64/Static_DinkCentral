import { z } from "zod";
import { insertTournamentSchema, insertCoachingLocationSchema, tournaments, coachingLocations } from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  tournaments: {
    list: {
      method: "GET" as const,
      path: "/api/tournaments" as const,
      responses: {
        200: z.array(z.custom<typeof tournaments.$inferSelect>()),
      },
    },
  },
  coachingLocations: {
    list: {
      method: "GET" as const,
      path: "/api/coaching-locations" as const,
      responses: {
        200: z.array(z.custom<typeof coachingLocations.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type TournamentResponse = z.infer<typeof api.tournaments.list.responses[200]>;
export type CoachingLocationResponse = z.infer<typeof api.coachingLocations.list.responses[200]>;
