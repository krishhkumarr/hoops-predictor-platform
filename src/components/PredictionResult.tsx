import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Team } from '../utils/types';
import { Trophy, TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';

interface TeamPrediction {
  team: Team;
  score: number;
  winProbability: number;
  strengths: string[];
  weaknesses: string[];
}

interface PredictionResultProps {
  predictions: TeamPrediction[];
}

const PredictionResult: React.FC<PredictionResultProps> = ({ predictions }) => {
  if (!predictions.length) {
    return null;
  }

  // Sort predictions by win probability (highest first)
  const sortedPredictions = [...predictions].sort((a, b) => b.winProbability - a.winProbability);
  const winner = sortedPredictions[0];
  
  // Organize teams into bracket-like rounds
  const finalFour = sortedPredictions.slice(0, 4);
  const eliteEight = sortedPredictions.slice(0, 8);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-6">
          <motion.div 
            className="inline-block mb-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <Trophy size={40} className="text-primary" />
          </motion.div>
          <h3 className="text-2xl font-medium">Tournament Champion</h3>
        </div>

        <motion.div 
          className="glass-card p-6 relative overflow-hidden"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div 
              className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center mb-4 md:mb-0 md:mr-6"
              style={{ backgroundColor: winner.team.colors.primary }}
            >
              <img 
                src={winner.team.logo} 
                alt={`${winner.team.name} logo`}
                className="w-20 h-20 object-contain"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-medium">{winner.team.name}</h2>
              <p className="text-sm text-muted-foreground mb-2">Seed: {winner.team.seed}</p>
              
              <div className="flex flex-wrap gap-2 mb-3 justify-center md:justify-start">
                <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  Win Probability: {(winner.winProbability * 100).toFixed(1)}%
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1 flex items-center">
                    <TrendingUp size={14} className="mr-1" /> Strengths
                  </p>
                  <ul className="text-sm">
                    {winner.strengths.map((strength, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight size={14} className="text-primary mr-1" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-1 flex items-center">
                    <TrendingDown size={14} className="mr-1" /> Weaknesses
                  </p>
                  <ul className="text-sm">
                    {winner.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight size={14} className="text-primary mr-1" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decorative element */}
          <motion.div 
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-10"
            style={{ 
              background: `radial-gradient(circle, ${winner.team.colors.primary} 0%, transparent 70%)` 
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Final Four */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-lg font-medium mb-4 text-center">Final Four</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {finalFour.map((prediction, index) => (
              <motion.div
                key={prediction.team.id}
                className={`glass-card p-4 flex items-center ${prediction.team.id === winner.team.id ? 'border-2 border-primary/30' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-8 text-center font-mono text-lg font-medium mr-3">
                  {index + 1}
                </div>
                
                <div 
                  className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center mr-4"
                  style={{ backgroundColor: prediction.team.colors.primary }}
                >
                  <img 
                    src={prediction.team.logo} 
                    alt={`${prediction.team.name} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{prediction.team.name}</h4>
                    <div className="text-sm text-muted-foreground">
                      Seed: {prediction.team.seed}
                    </div>
                  </div>
                  
                  <div className="w-full bg-secondary/50 h-2 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      style={{ width: `${prediction.winProbability * 100}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${prediction.winProbability * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <div className="text-xs text-muted-foreground">
                      Win Probability
                    </div>
                    <div className="text-xs font-medium">
                      {(prediction.winProbability * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Elite Eight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-lg font-medium mb-4 text-center">Elite Eight</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence>
            {eliteEight.map((prediction, index) => (
              <motion.div
                key={prediction.team.id}
                className={`glass-card p-3 ${prediction.team.id === winner.team.id ? 'border-2 border-primary/30' : ''} ${finalFour.some(team => team.team.id === prediction.team.id) ? 'bg-secondary/10' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-center mb-2">
                  <div 
                    className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center mr-3"
                    style={{ backgroundColor: prediction.team.colors.primary }}
                  >
                    <img 
                      src={prediction.team.logo} 
                      alt={`${prediction.team.name} logo`}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{prediction.team.name}</h4>
                    <p className="text-xs text-muted-foreground">Seed {prediction.team.seed}</p>
                  </div>
                </div>
                
                <div className="w-full bg-secondary/50 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    style={{ width: `${prediction.winProbability * 100}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${prediction.winProbability * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                  />
                </div>
                
                <div className="flex justify-end mt-1">
                  <div className="text-xs font-medium">
                    {(prediction.winProbability * 100).toFixed(1)}%
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default PredictionResult;
