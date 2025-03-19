
import React from 'react';
import { motion } from 'framer-motion';
import { BracketMatchup } from '../utils/bracketData';
import { ChevronRight } from 'lucide-react';

interface BracketViewProps {
  bracket: BracketMatchup[];
}

const BracketView: React.FC<BracketViewProps> = ({ bracket }) => {
  // Organize matchups by round
  const roundMatchups: { [key: number]: BracketMatchup[] } = {};
  
  for (let round = 1; round <= 6; round++) {
    roundMatchups[round] = bracket
      .filter(matchup => matchup.round === round)
      .sort((a, b) => {
        // Sort by region first, then by position
        if (a.regionId !== b.regionId) {
          return (a.regionId || '').localeCompare(b.regionId || '');
        }
        return a.position - b.position;
      });
  }
  
  const roundNames = {
    1: "First Round",
    2: "Second Round",
    3: "Sweet 16",
    4: "Elite Eight",
    5: "Final Four",
    6: "Championship"
  };
  
  // Ensure equal height spacing for matchups
  const getMatchupSpacing = (round: number) => {
    switch(round) {
      case 1: return 'h-16';
      case 2: return 'h-32';
      case 3: return 'h-64';
      case 4: return 'h-128';
      case 5: return 'h-256';
      default: return 'h-0';
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1200px] p-4 flex">
        {/* Render each round */}
        {[1, 2, 3, 4, 5, 6].map(round => (
          <div key={round} className="flex-1 min-w-[200px] px-2">
            <h3 className="text-sm font-medium mb-4 text-center text-primary">
              {roundNames[round as keyof typeof roundNames]}
            </h3>
            
            <div className="flex flex-col">
              {roundMatchups[round].map((matchup, index) => (
                <div key={matchup.id} className="relative mb-2">
                  <motion.div
                    className={`glass-card p-2 ${matchup.winner ? 'border-l-4 border-primary' : ''}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    {/* Team A */}
                    {matchup.teamA && (
                      <div className={`flex items-center py-1 ${matchup.winner?.id === matchup.teamA.id ? 'bg-primary/10 rounded' : ''}`}>
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-1 bg-secondary/20 rounded-full text-xs font-medium">
                          {matchup.teamA.seed}
                        </div>
                        <div 
                          className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center mr-2"
                          style={{ backgroundColor: matchup.teamA.colors.primary }}
                        >
                          <img 
                            src={matchup.teamA.logo} 
                            alt={`${matchup.teamA.name} logo`}
                            className="w-4 h-4 object-contain"
                          />
                        </div>
                        <div className="text-xs font-medium truncate flex-1">
                          {matchup.teamA.name}
                        </div>
                        {matchup.winner?.id === matchup.teamA.id && (
                          <ChevronRight size={14} className="text-primary" />
                        )}
                      </div>
                    )}
                    
                    {/* Team B */}
                    {matchup.teamB && (
                      <div className={`flex items-center py-1 ${matchup.winner?.id === matchup.teamB.id ? 'bg-primary/10 rounded' : ''}`}>
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-1 bg-secondary/20 rounded-full text-xs font-medium">
                          {matchup.teamB.seed}
                        </div>
                        <div 
                          className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center mr-2"
                          style={{ backgroundColor: matchup.teamB.colors.primary }}
                        >
                          <img 
                            src={matchup.teamB.logo} 
                            alt={`${matchup.teamB.name} logo`}
                            className="w-4 h-4 object-contain"
                          />
                        </div>
                        <div className="text-xs font-medium truncate flex-1">
                          {matchup.teamB.name}
                        </div>
                        {matchup.winner?.id === matchup.teamB.id && (
                          <ChevronRight size={14} className="text-primary" />
                        )}
                      </div>
                    )}
                    
                    {/* Empty placeholder if no teams yet */}
                    {!matchup.teamA && !matchup.teamB && (
                      <div className="h-16 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">TBD</span>
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Spacing between matchups */}
                  {index < roundMatchups[round].length - 1 && (
                    <div className={getMatchupSpacing(round)}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BracketView;
