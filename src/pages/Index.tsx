
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import StatAdjuster from '../components/StatAdjuster';
import BracketView from '../components/BracketView';
import { teams, stats } from '../utils/teamData';
import { simulateBracket } from '../utils/predictionAlgorithm';
import { generateInitialBracket, BracketMatchup } from '../utils/bracketData';

const Index = () => {
  const [statWeights, setStatWeights] = useState({});
  const [initialBracket, setInitialBracket] = useState<BracketMatchup[]>([]);
  const [simulatedBracket, setSimulatedBracket] = useState<BracketMatchup[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Initialize default stat weights and bracket
  useEffect(() => {
    const initialWeights = {};
    stats.forEach(stat => {
      initialWeights[stat.id] = stat.defaultWeight;
    });
    setStatWeights(initialWeights);
    
    // Generate initial bracket
    const bracket = generateInitialBracket(teams);
    setInitialBracket(bracket);
    setSimulatedBracket(bracket);
  }, []);

  // Simulate bracket whenever weights change
  useEffect(() => {
    if (initialBracket.length > 0 && Object.keys(statWeights).length > 0) {
      if (isSimulating) {
        const simulatedResults = simulateBracket(initialBracket, statWeights);
        setSimulatedBracket(simulatedResults);
        setIsSimulating(false);
      }
    }
  }, [initialBracket, statWeights, isSimulating]);

  const handleWeightChange = (statId, weight) => {
    setStatWeights(prev => ({
      ...prev,
      [statId]: weight,
    }));
  };

  const handleSimulate = () => {
    setIsSimulating(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 pb-20">
      <Header />
      
      <motion.main
        className="container mx-auto px-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.section 
          className="mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <StatAdjuster
            stats={stats}
            statWeights={statWeights}
            onWeightChange={handleWeightChange}
          />
          
          <motion.div 
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <button
              onClick={handleSimulate}
              className="glass-button px-8 py-3 rounded-full flex items-center justify-center text-primary font-medium hover:shadow-md transition-all duration-300"
            >
              Simulate Bracket
            </button>
          </motion.div>
        </motion.section>

        <AnimatePresence>
          {simulatedBracket.length > 0 && (
            <motion.section
              id="results-section"
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-medium text-center mb-8">Tournament Bracket Prediction</h2>
              <BracketView bracket={simulatedBracket} />
              
              {/* Show the champion */}
              {simulatedBracket.find(m => m.round === 6 && m.winner) && (
                <motion.div 
                  className="mt-16 text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-lg mb-2 text-muted-foreground">Tournament Champion</h3>
                  <div className="inline-block glass-card p-6 border-2 border-primary/30">
                    {(() => {
                      const championshipMatch = simulatedBracket.find(m => m.round === 6);
                      const champion = championshipMatch?.winner;
                      
                      if (!champion) return <p>Simulate to see the champion</p>;
                      
                      return (
                        <div className="flex items-center">
                          <div 
                            className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mr-4"
                            style={{ backgroundColor: champion.colors.primary }}
                          >
                            <img 
                              src={champion.logo} 
                              alt={`${champion.name} logo`}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold">{champion.name}</h2>
                            <p className="text-sm text-muted-foreground">Seed: {champion.seed}</p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </motion.div>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </motion.main>
    </div>
  );
};

export default Index;
