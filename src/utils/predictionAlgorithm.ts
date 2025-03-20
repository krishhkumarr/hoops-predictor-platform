import { Team, Stat } from './types';
import { stats } from './teamData2025';
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

// Calculate a team's score based on weighted stats
const calculateTeamScore = (team: Team, weights: StatWeight[]): number => {
  let totalScore = 0;
  let totalWeight = 0;

  weights.forEach(({ statId, weight }) => {
    const stat = stats.find(s => s.id === statId);
    if (stat && team.stats[statId] !== undefined) {
      // Normalize the stat value between 0 and 1
      const normalizedValue = (team.stats[statId] - stat.min) / (stat.max - stat.min);
      
      // Invert values where lower is better (e.g., turnovers)
      const adjustedValue = statId.toLowerCase().includes('turnover') ? 1 - normalizedValue : normalizedValue;
      
      totalScore += adjustedValue * weight;
      totalWeight += weight;
    }
  });

  // Return normalized score between 0 and 1
  return totalWeight > 0 ? totalScore / totalWeight : 0;
};

// Predict winner between two teams
const predictMatchupWinner = (teamA: Team, teamB: Team, weights: StatWeight[]): Team => {
  const scoreA = calculateTeamScore(teamA, weights);
  const scoreB = calculateTeamScore(teamB, weights);
  
  // Add minimal randomness based on the difference in scores
  const scoreDiff = Math.abs(scoreA - scoreB);
  const randomFactor = Math.random() * 0.05; // Reduced from 0.2 to 0.05 (5% random factor)
  
  // If scores are very close, still allow some randomness but less likely
  if (scoreDiff < 0.05) {
    return Math.random() < 0.5 ? teamA : teamB;
  }
  
  // If scores are far apart, follow prediction more strictly
  if (scoreDiff > 0.2) {
    return scoreA > scoreB ? teamA : teamB;
  }
  
  // For medium differences, use weighted random with less randomness
  const probability = (scoreA + randomFactor) / (scoreA + scoreB + randomFactor * 2);
  return Math.random() < probability ? teamA : teamB;
};

// Simulate the bracket
export const simulateBracket = (bracket: BracketMatchup[], weights: StatWeight[]): BracketMatchup[] => {
  const updatedBracket = [...bracket];
  
  // Process each round
  for (let round = 1; round <= 6; round++) {
    const roundMatchups = updatedBracket.filter(m => m.round === round);
    
    roundMatchups.forEach(matchup => {
      if (matchup.teamA && matchup.teamB) {
        // Predict winner
        const winner = predictMatchupWinner(matchup.teamA, matchup.teamB, weights);
        matchup.winner = winner;
        
        // Update next round matchup if exists
        if (round < 6 && matchup.nextMatchupId) {
          const nextRoundMatchup = updatedBracket.find(m => m.id === matchup.nextMatchupId);
          
          if (nextRoundMatchup) {
            // For Final Four and Championship, we need to handle both teams
            if (round >= 4) {
              // Find the other matchup that feeds into this Final Four/Championship matchup
              const otherMatchup = updatedBracket.find(m => 
                m.round === round && 
                m.nextMatchupId === matchup.nextMatchupId && 
                m.id !== matchup.id
              );
              
              if (otherMatchup && otherMatchup.winner) {
                // Set both teams for the next round matchup
                nextRoundMatchup.teamA = matchup.winner;
                nextRoundMatchup.teamB = otherMatchup.winner;
              } else {
                // If we don't have the other winner yet, just set this winner
                if (matchup.position % 2 === 0) {
                  nextRoundMatchup.teamA = winner;
                } else {
                  nextRoundMatchup.teamB = winner;
                }
              }
            } else {
              // For earlier rounds, just set the winner in the appropriate slot
              if (matchup.position % 2 === 0) {
                nextRoundMatchup.teamA = winner;
              } else {
                nextRoundMatchup.teamB = winner;
              }
            }
          }
        }
      }
    });
  }
  
  return updatedBracket;
};

// Get team strengths and weaknesses
const getTeamStrengthsAndWeaknesses = (team: Team, weights: StatWeight[]): { strengths: string[], weaknesses: string[] } => {
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  
  weights.forEach(({ statId, weight }) => {
    const stat = stats.find(s => s.id === statId);
    if (stat && team.stats[statId] !== undefined) {
      const normalizedValue = (team.stats[statId] - stat.min) / (stat.max - stat.min);
      const adjustedValue = statId.toLowerCase().includes('turnover') ? 1 - normalizedValue : normalizedValue;
      
      if (adjustedValue > 0.7) {
        strengths.push(stat.name);
      } else if (adjustedValue < 0.3) {
        weaknesses.push(stat.name);
      }
    }
  });
  
  return { strengths, weaknesses };
};

// Calculate predictions for selected teams
export const calculatePredictions = (teams: Team[], weights: StatWeight[]): TeamPrediction[] => {
  return teams.map(team => {
    const score = calculateTeamScore(team, weights);
    const { strengths, weaknesses } = getTeamStrengthsAndWeaknesses(team, weights);
    
    return {
      team,
      score,
      winProbability: score, // Use normalized score as win probability
      strengths,
      weaknesses
    };
  }).sort((a, b) => b.score - a.score);
};
