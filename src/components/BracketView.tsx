import React from 'react';
import { motion } from 'framer-motion';
import { BracketMatchup } from '../utils/bracketData';
import { ChevronRight } from 'lucide-react';

interface BracketViewProps {
  bracket: BracketMatchup[];
}

const BracketView: React.FC<BracketViewProps> = ({ bracket }) => {
  // Organize matchups by round and region
  const roundMatchups: { [key: number]: { [region: string]: BracketMatchup[] } } = {};
  const finalFourMatchups = bracket.filter(m => m.round === 5);
  const championshipMatchup = bracket.find(m => m.round === 6);
  
  // Define the region order to match NCAA bracket
  const leftSideRegions = ['South', 'West'];
  const rightSideRegions = ['East', 'Midwest'];
  
  for (let round = 1; round <= 4; round++) {
    roundMatchups[round] = {};
    [...leftSideRegions, ...rightSideRegions].forEach(region => {
      roundMatchups[round][region] = bracket
        .filter(matchup => matchup.round === round && matchup.regionId === region)
        .sort((a, b) => a.position - b.position);
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
  
  // Get region colors for visual grouping
  const getRegionColor = (region?: string) => {
    switch(region) {
      case 'South': return 'text-red-500';
      case 'East': return 'text-blue-500';
      case 'West': return 'text-green-500';
      case 'Midwest': return 'text-yellow-500';
      default: return 'text-primary';
    }
  };

  // Calculate how many teams we're showing
  const teamsInBracket = new Set<string>();
  bracket.forEach(matchup => {
    if (matchup.teamA?.id) teamsInBracket.add(matchup.teamA.id);
    if (matchup.teamB?.id) teamsInBracket.add(matchup.teamB.id);
  });

  // Function to render a matchup card
  const renderMatchupCard = (matchup: BracketMatchup, index: number, isFinalStage: boolean = false) => (
    <motion.div
      className={`glass-card p-2 relative ${isFinalStage ? 'scale-110 border-2 border-primary/30' : ''}`}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
    >
      {/* Connecting lines */}
      {matchup.round > 1 && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="w-4 h-[2px] bg-gray-300"></div>
        </div>
      )}
      
      {/* Team A */}
      <div className={`flex items-center py-1.5 ${matchup.winner?.id === matchup.teamA?.id ? 'bg-primary/10 rounded' : ''}`}>
        {matchup.teamA ? (
          <>
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
          </>
        ) : (
          <span className="text-xs text-muted-foreground mx-auto">TBD</span>
        )}
      </div>
      
      {/* Team B */}
      <div className={`flex items-center py-1.5 ${matchup.winner?.id === matchup.teamB?.id ? 'bg-primary/10 rounded' : ''}`}>
        {matchup.teamB ? (
          <>
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
          </>
        ) : (
          <span className="text-xs text-muted-foreground mx-auto">TBD</span>
        )}
      </div>
    </motion.div>
  );

  // Calculate spacing for each round
  const getMatchupSpacing = (round: number) => {
    switch (round) {
      case 1: return 'mb-2';
      case 2: return 'mb-8';
      case 3: return 'mb-16';
      case 4: return 'mb-32';
      default: return 'mb-4';
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1400px]">
        {/* Round Names */}
        <div className="flex justify-between px-4 mb-8">
          {[1, 2, 3, 4, 5, 6].map((round) => (
            <div key={round} className="flex-1 text-center">
              <h3 className="text-lg font-semibold text-primary">{roundNames[round]}</h3>
            </div>
          ))}
        </div>

        {/* Regional Rounds (1-4) */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left side (South and West) */}
          <div>
            {leftSideRegions.map((region) => (
              <div key={region} className="relative mb-12">
                <div className={`text-lg font-semibold mb-4 ${getRegionColor(region)}`}>
                  {region}
                </div>
                <div className="flex">
                  {[1, 2, 3, 4].map(round => (
                    <div key={round} className="flex-1 min-w-[180px] px-2">
                      <div className="flex flex-col">
                        {roundMatchups[round][region]?.map((matchup, index) => (
                          <div key={matchup.id} className={getMatchupSpacing(round)}>
                            {renderMatchupCard(matchup, index)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right side (East and Midwest) */}
          <div>
            {rightSideRegions.map((region) => (
              <div key={region} className="relative mb-12">
                <div className={`text-lg font-semibold mb-4 ${getRegionColor(region)}`}>
                  {region}
                </div>
                <div className="flex">
                  {[1, 2, 3, 4].map(round => (
                    <div key={round} className="flex-1 min-w-[180px] px-2">
                      <div className="flex flex-col">
                        {roundMatchups[round][region]?.map((matchup, index) => (
                          <div key={matchup.id} className={getMatchupSpacing(round)}>
                            {renderMatchupCard(matchup, index)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Four Section */}
        <div className="mt-16 mb-12">
          <div className="flex justify-center gap-8">
            {finalFourMatchups.sort((a, b) => a.position - b.position).map((matchup, index) => (
              <div key={matchup.id} className="w-[300px]">
                {renderMatchupCard(matchup, index, true)}
              </div>
            ))}
          </div>
        </div>

        {/* Championship Section */}
        {championshipMatchup && (
          <div className="mt-16 mb-12">
            <div className="flex justify-center">
              <div className="w-[400px]">
                {renderMatchupCard(championshipMatchup, 0, true)}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Display stats about the bracket */}
      <div className="text-center text-xs text-muted-foreground mt-4">
        {teamsInBracket.size} teams in bracket • 
        {championshipMatchup?.winner ? ` Champion: ${championshipMatchup.winner.name}` : ' Simulate to see champion'}
      </div>
    </div>
  );
};

export default BracketView;
