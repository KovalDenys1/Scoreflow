export const games = [
  {
    id: "g1",
    status: "upcoming",
    startTime: "2026-02-28T18:00:00Z",
    homeTeam: "Lakers",
    awayTeam: "Celtics",
    score: null,
  },
  {
    id: "g2",
    status: "upcoming",
    startTime: "2026-02-28T20:30:00Z",
    homeTeam: "Nuggets",
    awayTeam: "Heat",
    score: null,
  },
  {
    id: "g3",
    status: "live",
    startTime: "2026-02-27T09:00:00Z",
    homeTeam: "Warriors",
    awayTeam: "Suns",
    score: { home: 81, away: 77 },
  },
  {
    id: "g4",
    status: "finished",
    startTime: "2026-02-26T23:00:00Z",
    homeTeam: "Bulls",
    awayTeam: "Bucks",
    score: { home: 102, away: 110 },
  },
  {
    id: "g5",
    status: "finished",
    startTime: "2026-02-26T01:30:00Z",
    homeTeam: "Knicks",
    awayTeam: "76ers",
    score: { home: 119, away: 112 },
  },
];

export const players = [
  { id: "p1", name: "LeBron James", team: "Lakers", pts: 25.1, reb: 7.6, ast: 8.2 },
  { id: "p2", name: "Jayson Tatum", team: "Celtics", pts: 27.5, reb: 8.4, ast: 4.9 },
  { id: "p3", name: "Stephen Curry", team: "Warriors", pts: 28.4, reb: 4.6, ast: 6.1 },
  { id: "p4", name: "Nikola Jokic", team: "Nuggets", pts: 26.2, reb: 12.1, ast: 9.3 },
];
