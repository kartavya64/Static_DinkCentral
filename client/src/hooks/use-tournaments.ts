import { tournaments } from "@/data/tournaments";

export function useTournaments() {
  return {
    data: tournaments,
    isLoading: false,
    error: null,
  };
}
