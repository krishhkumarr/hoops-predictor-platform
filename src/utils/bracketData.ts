import { Team } from './types';

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
  { name: "South", teams: [] },
  { name: "East", teams: [] },
  { name: "West", teams: [] },
  { name: "Midwest", teams: [] }
];

export const generateInitialBracket = (teams: Team[]): BracketMatchup[] => {
  // Group teams by region
  const teamsByRegion: { [key: string]: Team[] } = {};
  
  teams.forEach(team => {
    if (!team.region) {
      console.error('Team missing region:', team);
      return;
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
  // Define the exact matchups for each region
  const regionMatchups = {
    'South': [
      [1, 16], // Auburn vs Alabama St.
      [8, 9],  // Louisville vs Creighton
      [5, 12], // Michigan vs UC San Diego
      [4, 13], // Texas A&M vs Yale
      [6, 11], // Ole Miss vs North Carolina
      [3, 14], // Iowa St. vs Lipscomb
      [7, 10], // Marquette vs New Mexico
      [2, 15]  // Michigan St. vs Bryant
    ],
    'East': [
      [1, 16], // Duke vs American/Mount St. Mary's
      [8, 9],  // Mississippi St. vs Baylor
      [5, 12], // Oregon vs Liberty
      [4, 13], // Arizona vs Akron
      [6, 11], // BYU vs VCU
      [3, 14], // Wisconsin vs Montana
      [7, 10], // Saint Mary's vs Vanderbilt
      [2, 15]  // Alabama vs Robert Morris
    ],
    'West': [
      [1, 16], // Florida vs Norfolk St.
      [8, 9],  // UConn vs Oklahoma
      [5, 12], // Memphis vs Colorado St.
      [4, 13], // Maryland vs Grand Canyon
      [6, 11], // Missouri vs Drake
      [3, 14], // Texas Tech vs UNC Wilmington
      [7, 10], // Kansas vs Arkansas
      [2, 15]  // St. John's vs Omaha
    ],
    'Midwest': [
      [1, 16], // Houston vs SIU Edwardsville
      [8, 9],  // Gonzaga vs Georgia
      [5, 12], // Clemson vs McNeese
      [4, 13], // Purdue vs High Point
      [6, 11], // Illinois vs Texas/Xavier
      [3, 14], // Kentucky vs Troy
      [7, 10], // UCLA vs Utah St.
      [2, 15]  // Tennessee vs Wofford
    ]
  };

  // Create first round matchups
  Object.entries(regionMatchups).forEach(([region, matchupPairs]) => {
    matchupPairs.forEach(([seedA, seedB], index) => {
      const teamA = teamsByRegion[region].find(team => team.seed === seedA);
      const teamB = teamsByRegion[region].find(team => team.seed === seedB);
      
      if (!teamA || !teamB) {
        console.error(`Missing teams for ${region} matchup: ${seedA} vs ${seedB}`);
        return;
      }

      matchups.push({
        id: `${matchupId}`,
        teamA,
        teamB,
        round: 1,
        regionId: region,
        position: index + 1
      });
      matchupId++;
    });
  });

  // Second round - 16 matchups
  Object.keys(regionMatchups).forEach(region => {
    const regionFirstRound = matchups
      .filter(m => m.round === 1 && m.regionId === region)
      .sort((a, b) => a.position - b.position);
    
    for (let i = 0; i < regionFirstRound.length; i += 2) {
      const matchupId2 = matchupId++;
      const currentMatchup = regionFirstRound[i];
      const nextMatchup = regionFirstRound[i + 1];
      
      matchups.push({
        id: `${matchupId2}`,
        round: 2,
        regionId: region,
        position: Math.floor(i / 2) + 1
      });
      
      currentMatchup.nextMatchupId = `${matchupId2}`;
      nextMatchup.nextMatchupId = `${matchupId2}`;
    }
  });

  // Sweet 16 - 8 matchups
  Object.keys(regionMatchups).forEach(region => {
    const regionSecondRound = matchups
      .filter(m => m.round === 2 && m.regionId === region)
      .sort((a, b) => a.position - b.position);
    
    for (let i = 0; i < regionSecondRound.length; i += 2) {
      const matchupId3 = matchupId++;
      const currentMatchup = regionSecondRound[i];
      const nextMatchup = regionSecondRound[i + 1];
      
      matchups.push({
        id: `${matchupId3}`,
        round: 3,
        regionId: region,
        position: Math.floor(i / 2) + 1
      });
      
      currentMatchup.nextMatchupId = `${matchupId3}`;
      nextMatchup.nextMatchupId = `${matchupId3}`;
    }
  });

  // Elite 8 - 4 matchups
  Object.keys(regionMatchups).forEach(region => {
    const regionSweetSixteen = matchups
      .filter(m => m.round === 3 && m.regionId === region)
      .sort((a, b) => a.position - b.position);
    
    const matchupId4 = matchupId++;
    matchups.push({
      id: `${matchupId4}`,
      round: 4,
      regionId: region,
      position: 1
    });
    
    regionSweetSixteen.forEach(matchup => {
      matchup.nextMatchupId = `${matchupId4}`;
    });
  });

  // Final Four - 2 matchups (South vs East, West vs Midwest)
  const eliteEightMatchups = matchups.filter(m => m.round === 4);
  
  // South vs East
  const southEastMatchupId = matchupId++;
  matchups.push({
    id: `${southEastMatchupId}`,
    round: 5,
    position: 1
  });
  
  const southMatchup = eliteEightMatchups.find(m => m.regionId === 'South');
  const eastMatchup = eliteEightMatchups.find(m => m.regionId === 'East');
  if (southMatchup) southMatchup.nextMatchupId = `${southEastMatchupId}`;
  if (eastMatchup) eastMatchup.nextMatchupId = `${southEastMatchupId}`;
  
  // West vs Midwest
  const westMidwestMatchupId = matchupId++;
  matchups.push({
    id: `${westMidwestMatchupId}`,
    round: 5,
    position: 2
  });
  
  const westMatchup = eliteEightMatchups.find(m => m.regionId === 'West');
  const midwestMatchup = eliteEightMatchups.find(m => m.regionId === 'Midwest');
  if (westMatchup) westMatchup.nextMatchupId = `${westMidwestMatchupId}`;
  if (midwestMatchup) midwestMatchup.nextMatchupId = `${westMidwestMatchupId}`;
  
  // Championship
  const championshipMatchupId = matchupId++;
  matchups.push({
    id: `${championshipMatchupId}`,
    round: 6,
    position: 1
  });
  
  // Connect Final Four to Championship
  const finalFourMatchups = matchups.filter(m => m.round === 5);
  finalFourMatchups.forEach(matchup => {
    matchup.nextMatchupId = `${championshipMatchupId}`;
  });
  
  return matchups;
};
