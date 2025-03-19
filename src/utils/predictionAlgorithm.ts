
import { Team, Stat, stats } from './teamData';
import { BracketMatchup } from './bracketData';

interface StatWeight {
  statId: string;
  weight: number;
}

interface TeamPrediction {
  team: Team;
  score: number;
  winProbability: number;
  strengths: string[];
  weaknesses: string[];
}

export const calculateTeamScore = (
  team: Team,
  statWeights: { [key: string]: number }
): number => {
  let score = 0;
  
  Object.entries(statWeights).forEach(([statId, weight]) => {
    const statDefinition = stats.find(s => s.id === statId);
    if (!statDefinition) return;
    
    const value = team.stats[statId];
    const min = statDefinition.min;
    const max = statDefinition.max;
    
    // Normalize the stat value between 0 and 1 based on min/max ranges
    let normalizedValue = (value - min) / (max - min);
    
    // For stats where lower is better (like defensive efficiency or turnovers), invert the value
    if (statId === 'defensiveEfficiency' || statId === 'turnoverRate') {
      normalizedValue = 1 - normalizedValue;
    }
    
    // Add the weighted contribution to the total score
    score += normalizedValue * weight;
  });
  
  return score;
};

export const predictMatchupWinner = (
  teamA: Team,
  teamB: Team,
  statWeights: { [key: string]: number }
): Team => {
  const scoreA = calculateTeamScore(teamA, statWeights);
  const scoreB = calculateTeamScore(teamB, statWeights);
  
  return scoreA >= scoreB ? teamA : teamB;
};

export const simulateBracket = (
  initialBracket: BracketMatchup[],
  statWeights: { [key: string]: number }
): BracketMatchup[] => {
  // Create a deep copy of the initial bracket
  const simulatedBracket: BracketMatchup[] = JSON.parse(JSON.stringify(initialBracket));
  
  // Process rounds one by one
  for (let round = 1; round <= 6; round++) {
    // Get all matchups for the current round
    const currentRoundMatchups = simulatedBracket.filter(matchup => matchup.round === round);
    
    // Simulate each matchup in the current round
    currentRoundMatchups.forEach(matchup => {
      // Skip if we don't have both teams
      if (!matchup.teamA || !matchup.teamB) {
        return;
      }
      
      // Predict the winner
      const winner = predictMatchupWinner(matchup.teamA, matchup.teamB, statWeights);
      matchup.winner = winner;
      
      // Advance the winner to the next round if there is a next matchup
      if (matchup.nextMatchupId) {
        const nextMatchup = simulatedBracket.find(m => m.id === matchup.nextMatchupId);
        if (nextMatchup) {
          // If teamA is not set, use it, otherwise use teamB
          if (!nextMatchup.teamA) {
            nextMatchup.teamA = winner;
          } else {
            nextMatchup.teamB = winner;
          }
        }
      }
    });
  }
  
  return simulatedBracket;
};

export const getTeamStrengthsAndWeaknesses = (team: Team): { strengths: string[], weaknesses: string[] } => {
  const statPerformances = Object.entries(team.stats).map(([statId, value]) => {
    const statDef = stats.find(s => s.id === statId);
    if (!statDef) return { statId, normalizedValue: 0, statName: '' };
    
    let normalizedValue = (value - statDef.min) / (statDef.max - statDef.min);
    if (statId === 'defensiveEfficiency' || statId === 'turnoverRate') {
      normalizedValue = 1 - normalizedValue;
    }
    
    return {
      statId,
      statName: statDef.name,
      normalizedValue
    };
  });
  
  // Sort by normalized values to find strengths and weaknesses
  const sortedStats = [...statPerformances].sort((a, b) => b.normalizedValue - a.normalizedValue);
  
  const strengths = sortedStats.slice(0, 3).map(s => s.statName);
  const weaknesses = sortedStats.slice(-3).map(s => s.statName);
  
  return { strengths, weaknesses };
};

export const calculatePredictions = (
  selectedTeams: Team[],
  statWeights: StatWeight[]
): TeamPrediction[] => {
  // Convert statWeights array to object for easier access
  const statWeightsObj: { [key: string]: number } = {};
  statWeights.forEach(({ statId, weight }) => {
    statWeightsObj[statId] = weight;
  });
  
  // Calculate raw scores based on weighted stats
  const rawScores = selectedTeams.map(team => {
    const score = calculateTeamScore(team, statWeightsObj);
    return { team, score };
  });
  
  // Calculate the total score to find probabilities
  const totalScore = rawScores.reduce((sum, item) => sum + item.score, 0);
  
  // Calculate win probabilities and identify strengths/weaknesses
  return rawScores.map(({ team, score }) => {
    // Calculate win probability
    const winProbability = totalScore > 0 ? score / totalScore : 1 / selectedTeams.length;
    
    // Get strengths and weaknesses
    const { strengths, weaknesses } = getTeamStrengthsAndWeaknesses(team);
    
    return {
      team,
      score,
      winProbability,
      strengths,
      weaknesses,
    };
  }).sort((a, b) => b.score - a.score); // Sort by score in descending order
};
