
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import TeamSelector from '../components/TeamSelector';
import StatAdjuster from '../components/StatAdjuster';
import PredictionResult from '../components/PredictionResult';
import { teams, stats } from '../utils/teamData';
import { calculatePredictions } from '../utils/predictionAlgorithm';

const Index = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [statWeights, setStatWeights] = useState({});
  const [predictions, setPredictions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Initialize default stat weights
  useEffect(() => {
    const initialWeights = {};
    stats.forEach(stat => {
      initialWeights[stat.id] = stat.defaultWeight;
    });
    setStatWeights(initialWeights);
  }, []);

  // Calculate predictions whenever selected teams or stat weights change
  useEffect(() => {
    if (selectedTeams.length >= 2) {
      const statWeightsArray = Object.keys(statWeights).map(statId => ({
        statId,
        weight: statWeights[statId],
      }));
      
      const newPredictions = calculatePredictions(selectedTeams, statWeightsArray);
      setPredictions(newPredictions);
    } else {
      setPredictions([]);
      setShowResults(false);
    }
  }, [selectedTeams, statWeights]);

  const handleTeamSelect = (team) => {
    setSelectedTeams(prev => [...prev, team]);
  };

  const handleTeamRemove = (team) => {
    setSelectedTeams(prev => prev.filter(t => t.id !== team.id));
  };

  const handleWeightChange = (statId, weight) => {
    setStatWeights(prev => ({
      ...prev,
      [statId]: weight,
    }));
  };

  const handleCalculate = () => {
    if (selectedTeams.length >= 2) {
      setShowResults(true);
      
      // Scroll to results after a short delay
      setTimeout(() => {
        const resultsElement = document.getElementById('results-section');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
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
          <TeamSelector
            teams={teams}
            selectedTeams={selectedTeams}
            onTeamSelect={handleTeamSelect}
            onTeamRemove={handleTeamRemove}
          />
        </motion.section>

        <AnimatePresence>
          {selectedTeams.length >= 2 && (
            <motion.section 
              className="mb-12"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
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
                  onClick={handleCalculate}
                  className="glass-button px-8 py-3 rounded-full flex items-center justify-center text-primary font-medium hover:shadow-md transition-all duration-300"
                >
                  Calculate Prediction
                </button>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showResults && predictions.length > 0 && (
            <motion.section
              id="results-section"
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PredictionResult predictions={predictions} />
            </motion.section>
          )}
        </AnimatePresence>
      </motion.main>
    </div>
  );
};

export default Index;
