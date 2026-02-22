export interface CoachingLocation {
  id: number;
  name: string;
  sport: string;
  logoUrl: string;
}

export const coachingLocations: CoachingLocation[] = [
  {
    id: 1,
    name: "Golden International School",
    sport: "Pickleball",
    logoUrl: "/golden-logo.png"
  },
  {
    id: 2,
    name: "Raja Ramanna Centre for Advanced Technology",
    sport: "Pickleball",
    logoUrl: "/rrcat-logo.png"
  }
];
