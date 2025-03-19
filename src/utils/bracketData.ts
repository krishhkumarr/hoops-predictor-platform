
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
    if (!team.region) {
      console.error('Team missing region:', team);
      return; // Skip teams without region
    }
    
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
  
  // Make sure we have first round matchups before creating subsequent rounds
  if (matchups.length === 0) {
    console.warn('No first round matchups generated - check team data');
    return [];
  }
  
  // Second round - 16 matchups
  for (let i = 0; i < Math.min(16, matchups.length); i += 2) {
    const currentMatchup = matchups[i];
    const nextMatchup = i + 1 < matchups.length ? matchups[i + 1] : null;
    
    if (!currentMatchup || !nextMatchup) {
      console.warn('Missing matchups for round 2 generation', i);
      continue;
    }
    
    matchups.push({
      id: `${matchupId}`,
      round: 2,
      regionId: currentMatchup.regionId,
      position: Math.floor(i / 2) + 1
    });
    
    // Set nextMatchupId for first round matchups
    matchups[i].nextMatchupId = `${matchupId}`;
    matchups[i + 1].nextMatchupId = `${matchupId}`;
    
    matchupId++;
  }
  
  const round2Matchups = matchups.filter(m => m.round === 2);
  
  // Sweet 16 - 8 matchups
  for (let i = 0; i < Math.min(8, round2Matchups.length); i += 2) {
    const idx = i + matchups.filter(m => m.round === 1).length;
    const currentMatchup = matchups[idx];
    const nextMatchup = idx + 1 < matchups.length ? matchups[idx + 1] : null;
    
    if (!currentMatchup || !nextMatchup) {
      console.warn('Missing matchups for round 3 generation', i, idx);
      continue;
    }
    
    matchups.push({
      id: `${matchupId}`,
      round: 3,
      regionId: currentMatchup.regionId,
      position: Math.floor(i / 2) + 1
    });
    
    // Set nextMatchupId for second round matchups
    matchups[idx].nextMatchupId = `${matchupId}`;
    matchups[idx + 1].nextMatchupId = `${matchupId}`;
    
    matchupId++;
  }
  
  const round3Matchups = matchups.filter(m => m.round === 3);
  
  // Elite 8 - 4 matchups
  for (let i = 0; i < Math.min(4, round3Matchups.length); i += 2) {
    const idx = i + matchups.filter(m => m.round < 3).length;
    const currentMatchup = matchups[idx];
    const nextMatchup = idx + 1 < matchups.length ? matchups[idx + 1] : null;
    
    if (!currentMatchup || !nextMatchup) {
      console.warn('Missing matchups for round 4 generation', i, idx);
      continue;
    }
    
    matchups.push({
      id: `${matchupId}`,
      round: 4,
      regionId: currentMatchup.regionId,
      position: Math.floor(i / 2) + 1
    });
    
    // Set nextMatchupId for Sweet 16 matchups
    matchups[idx].nextMatchupId = `${matchupId}`;
    matchups[idx + 1].nextMatchupId = `${matchupId}`;
    
    matchupId++;
  }
  
  const round4Matchups = matchups.filter(m => m.round === 4);
  
  // Final Four - 2 matchups
  if (round4Matchups.length >= 2) {
    const firstMatchupIdx = matchups.indexOf(round4Matchups[0]);
    const secondMatchupIdx = matchups.indexOf(round4Matchups[1]);
    
    matchups.push({
      id: `${matchupId}`,
      round: 5,
      position: 1
    });
    
    if (firstMatchupIdx >= 0 && secondMatchupIdx >= 0) {
      matchups[firstMatchupIdx].nextMatchupId = `${matchupId}`;
      matchups[secondMatchupIdx].nextMatchupId = `${matchupId}`;
    }
    
    matchupId++;
  }
  
  if (round4Matchups.length >= 4) {
    const thirdMatchupIdx = matchups.indexOf(round4Matchups[2]);
    const fourthMatchupIdx = matchups.indexOf(round4Matchups[3]);
    
    matchups.push({
      id: `${matchupId}`,
      round: 5,
      position: 2
    });
    
    if (thirdMatchupIdx >= 0 && fourthMatchupIdx >= 0) {
      matchups[thirdMatchupIdx].nextMatchupId = `${matchupId}`;
      matchups[fourthMatchupIdx].nextMatchupId = `${matchupId}`;
    }
    
    matchupId++;
  }
  
  const round5Matchups = matchups.filter(m => m.round === 5);
  
  // Championship - 1 matchup
  if (round5Matchups.length >= 2) {
    const firstFinalFourIdx = matchups.indexOf(round5Matchups[0]);
    const secondFinalFourIdx = matchups.indexOf(round5Matchups[1]);
    
    matchups.push({
      id: `${matchupId}`,
      round: 6,
      position: 1
    });
    
    if (firstFinalFourIdx >= 0 && secondFinalFourIdx >= 0) {
      matchups[firstFinalFourIdx].nextMatchupId = `${matchupId}`;
      matchups[secondFinalFourIdx].nextMatchupId = `${matchupId}`;
    }
  }
  
  return matchups;
};
