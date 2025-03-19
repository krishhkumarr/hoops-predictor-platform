
import { Team } from './teamData';

export interface BracketRegion {
  name: string;
  teams: Team[];
}

export interface BracketRound {
  name: string;
  matchups: BracketMatchup[];
}

export interface BracketMatchup {
  id: string;
  teamA?: Team;
  teamB?: Team;
  winner?: Team;
  nextMatchupId?: string;
  round: number;
  regionId?: string;
  position: number;
}

export const regions: BracketRegion[] = [
  { name: "West", teams: [] },
  { name: "East", teams: [] },
  { name: "South", teams: [] },
  { name: "Midwest", teams: [] }
];

export const generateInitialBracket = (teams: Team[]): BracketMatchup[] => {
  // Group teams by region
  const teamsByRegion: { [key: string]: Team[] } = {};
  
  teams.forEach(team => {
    if (!teamsByRegion[team.region]) {
      teamsByRegion[team.region] = [];
    }
    teamsByRegion[team.region].push(team);
  });
  
  // Sort teams by seed within each region
  Object.keys(teamsByRegion).forEach(region => {
    teamsByRegion[region].sort((a, b) => a.seed - b.seed);
  });
  
  const matchups: BracketMatchup[] = [];
  let matchupId = 1;
  
  // First round - 32 matchups (64 teams)
  Object.keys(teamsByRegion).forEach(region => {
    const regionTeams = teamsByRegion[region];
    
    // Create first round matchups based on traditional seeding (1 vs 16, 2 vs 15, etc.)
    for (let i = 0; i < 8; i++) {
      const position = i + 1;
      const teamA = regionTeams.find(team => team.seed === position);
      const teamB = regionTeams.find(team => team.seed === 17 - position);
      
      if (teamA && teamB) {
        matchups.push({
          id: `${matchupId}`,
          teamA,
          teamB,
          round: 1,
          regionId: region,
          position: i + 1
        });
        matchupId++;
      }
    }
  });
  
  // Second round - 16 matchups
  for (let i = 0; i < 16; i += 2) {
    matchups.push({
      id: `${matchupId}`,
      round: 2,
      regionId: matchups[i].regionId,
      position: Math.floor(i / 2) + 1
    });
    
    // Set nextMatchupId for first round matchups
    matchups[i].nextMatchupId = `${matchupId}`;
    matchups[i + 1].nextMatchupId = `${matchupId}`;
    
    matchupId++;
  }
  
  // Sweet 16 - 8 matchups
  for (let i = 32; i < 40; i += 2) {
    matchups.push({
      id: `${matchupId}`,
      round: 3,
      regionId: matchups[i - 16].regionId,
      position: Math.floor((i - 32) / 2) + 1
    });
    
    // Set nextMatchupId for second round matchups
    matchups[i - 16].nextMatchupId = `${matchupId}`;
    matchups[i - 15].nextMatchupId = `${matchupId}`;
    
    matchupId++;
  }
  
  // Elite 8 - 4 matchups
  for (let i = 40; i < 44; i += 1) {
    matchups.push({
      id: `${matchupId}`,
      round: 4,
      regionId: matchups[i].regionId,
      position: i - 39
    });
    
    // Set nextMatchupId for Sweet 16 matchups
    matchups[i].nextMatchupId = `${matchupId}`;
    matchups[i + 1].nextMatchupId = `${matchupId}`;
    i += 1; // Skip one more to handle pairs correctly
    
    matchupId++;
  }
  
  // Final Four - 2 matchups
  matchups.push(
    {
      id: `${matchupId}`,
      round: 5,
      position: 1
    }
  );
  matchups[44].nextMatchupId = `${matchupId}`;
  matchups[45].nextMatchupId = `${matchupId}`;
  matchupId++;
  
  matchups.push(
    {
      id: `${matchupId}`,
      round: 5,
      position: 2
    }
  );
  matchups[46].nextMatchupId = `${matchupId}`;
  matchups[47].nextMatchupId = `${matchupId}`;
  matchupId++;
  
  // Championship - 1 matchup
  matchups.push(
    {
      id: `${matchupId}`,
      round: 6,
      position: 1
    }
  );
  matchups[48].nextMatchupId = `${matchupId}`;
  matchups[49].nextMatchupId = `${matchupId}`;
  
  return matchups;
};
