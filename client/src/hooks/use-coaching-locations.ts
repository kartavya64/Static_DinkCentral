import { coachingLocations } from "@/data/coaching-locations";

export function useCoachingLocations() {
  return {
    data: coachingLocations,
    isLoading: false,
    error: null,
  };
}
