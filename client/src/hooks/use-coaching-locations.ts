import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useCoachingLocations() {
  return useQuery({
    queryKey: [api.coachingLocations.list.path],
    queryFn: async () => {
      const res = await fetch(api.coachingLocations.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch coaching locations");
      return api.coachingLocations.list.responses[200].parse(await res.json());
    },
  });
}
