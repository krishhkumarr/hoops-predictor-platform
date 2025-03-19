
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
    const expectedMatchups = 8; // 8 matchups per region in first round
    
    // Create first round matchups based on traditional seeding (1 vs 16, 2 vs 15, etc.)
    for (let i = 0; i < expectedMatchups; i++) {
      const position = i + 1;
      const seedA = position;
      const seedB = 17 - position;
      
      const teamA = regionTeams.find(team => team.seed === seedA);
      const teamB = regionTeams.find(team => team.seed === seedB);
      
      // Create the matchup even if one or both teams are missing
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
  });
  
  // Make sure we have first round matchups before creating subsequent rounds
  if (matchups.length === 0) {
    console.warn('No first round matchups generated - check team data');
    return [];
  }
  
  // Get matchups per region (should be 8 per region in first round for a total of 32)
  const firstRoundCount = matchups.filter(m => m.round === 1).length;
  const regionsCount = Object.keys(teamsByRegion).length;
  const matchupsPerRegion = Math.floor(firstRoundCount / regionsCount);
  
  // Second round - 16 matchups
  // Process each region separately
  Object.keys(teamsByRegion).forEach(region => {
    const regionMatchups = matchups
      .filter(m => m.round === 1 && m.regionId === region)
      .sort((a, b) => a.position - b.position);
    
    // Create second round matchups for this region
    for (let i = 0; i < regionMatchups.length; i += 2) {
      if (i + 1 >= regionMatchups.length) {
        console.warn(`Odd number of matchups for round 2 in region ${region}`);
        break;
      }
      
      const currentMatchup = regionMatchups[i];
      const nextMatchup = regionMatchups[i + 1];
      
      // Create the second round matchup
      matchups.push({
        id: `${matchupId}`,
        round: 2,
        regionId: region,
        position: Math.floor(i / 2) + 1
      });
      
      // Set nextMatchupId for first round matchups
      currentMatchup.nextMatchupId = `${matchupId}`;
      nextMatchup.nextMatchupId = `${matchupId}`;
      
      matchupId++;
    }
  });
  
  // Sweet 16 - 8 matchups (2 per region)
  Object.keys(teamsByRegion).forEach(region => {
    const regionMatchups = matchups
      .filter(m => m.round === 2 && m.regionId === region)
      .sort((a, b) => a.position - b.position);
    
    for (let i = 0; i < regionMatchups.length; i += 2) {
      if (i + 1 >= regionMatchups.length) {
        console.warn(`Odd number of matchups for round 3 in region ${region}`);
        break;
      }
      
      const currentMatchup = regionMatchups[i];
      const nextMatchup = regionMatchups[i + 1];
      
      // Create the Sweet 16 matchup
      matchups.push({
        id: `${matchupId}`,
        round: 3,
        regionId: region,
        position: Math.floor(i / 2) + 1
      });
      
      // Set nextMatchupId for second round matchups
      currentMatchup.nextMatchupId = `${matchupId}`;
      nextMatchup.nextMatchupId = `${matchupId}`;
      
      matchupId++;
    }
  });
  
  // Elite 8 - 4 matchups (1 per region)
  Object.keys(teamsByRegion).forEach(region => {
    const regionMatchups = matchups
      .filter(m => m.round === 3 && m.regionId === region)
      .sort((a, b) => a.position - b.position);
    
    if (regionMatchups.length < 2) {
      console.warn(`Not enough Sweet 16 matchups for Elite 8 in region ${region}`);
      return;
    }
    
    const currentMatchup = regionMatchups[0];
    const nextMatchup = regionMatchups[1];
    
    // Create the Elite 8 matchup
    matchups.push({
      id: `${matchupId}`,
      round: 4,
      regionId: region,
      position: 1
    });
    
    // Set nextMatchupId for Sweet 16 matchups
    currentMatchup.nextMatchupId = `${matchupId}`;
    nextMatchup.nextMatchupId = `${matchupId}`;
    
    matchupId++;
  });
  
  // Final Four - 2 matchups
  const eliteEightMatchups = matchups.filter(m => m.round === 4);
  const regions = Object.keys(teamsByRegion);
  
  // South vs East
  if (regions.includes('South') && regions.includes('East')) {
    const southMatchup = eliteEightMatchups.find(m => m.regionId === 'South');
    const eastMatchup = eliteEightMatchups.find(m => m.regionId === 'East');
    
    if (southMatchup && eastMatchup) {
      matchups.push({
        id: `${matchupId}`,
        round: 5,
        position: 1
      });
      
      southMatchup.nextMatchupId = `${matchupId}`;
      eastMatchup.nextMatchupId = `${matchupId}`;
      
      matchupId++;
    }
  }
  
  // West vs Midwest
  if (regions.includes('West') && regions.includes('Midwest')) {
    const westMatchup = eliteEightMatchups.find(m => m.regionId === 'West');
    const midwestMatchup = eliteEightMatchups.find(m => m.regionId === 'Midwest');
    
    if (westMatchup && midwestMatchup) {
      matchups.push({
        id: `${matchupId}`,
        round: 5,
        position: 2
      });
      
      westMatchup.nextMatchupId = `${matchupId}`;
      midwestMatchup.nextMatchupId = `${matchupId}`;
      
      matchupId++;
    }
  }
  
  // Championship - 1 matchup
  const finalFourMatchups = matchups.filter(m => m.round === 5);
  
  if (finalFourMatchups.length >= 2) {
    const firstFinalFourMatchup = finalFourMatchups[0];
    const secondFinalFourMatchup = finalFourMatchups[1];
    
    matchups.push({
      id: `${matchupId}`,
      round: 6,
      position: 1
    });
    
    firstFinalFourMatchup.nextMatchupId = `${matchupId}`;
    secondFinalFourMatchup.nextMatchupId = `${matchupId}`;
  }
  
  return matchups;
};
