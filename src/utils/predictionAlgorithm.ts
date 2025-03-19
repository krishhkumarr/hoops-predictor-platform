
import { Team, Stat, stats } from './teamData';

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

export const calculatePredictions = (
  selectedTeams: Team[],
  statWeights: StatWeight[]
): TeamPrediction[] => {
  // Calculate raw scores based on weighted stats
  const rawScores = selectedTeams.map(team => {
    let score = 0;
    
    statWeights.forEach(({ statId, weight }) => {
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
    
    return { team, score };
  });
  
  // Calculate the total score to find probabilities
  const totalScore = rawScores.reduce((sum, item) => sum + item.score, 0);
  
  // Calculate win probabilities and identify strengths/weaknesses
  return rawScores.map(({ team, score }) => {
    // Calculate win probability
    const winProbability = totalScore > 0 ? score / totalScore : 1 / selectedTeams.length;
    
    // Identify top strengths and weaknesses
    const statPerformances = Object.entries(team.stats).map(([statId, value]) => {
      const statDef = stats.find(s => s.id === statId);
      if (!statDef) return { statId, normalizedValue: 0 };
      
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
    
    return {
      team,
      score,
      winProbability,
      strengths,
      weaknesses,
    };
  }).sort((a, b) => b.score - a.score); // Sort by score in descending order
};
