
import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../utils/teamData';

interface StatAdjusterProps {
  stats: Stat[];
  statWeights: { [key: string]: number };
  onWeightChange: (statId: string, weight: number) => void;
}

const StatAdjuster: React.FC<StatAdjusterProps> = ({
  stats,
  statWeights,
  onWeightChange,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.h3 
        className="text-lg font-medium mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Adjust Stat Importance
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="glass-card p-4 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="mb-2 flex justify-between items-center">
              <div>
                <h4 className="font-medium text-sm">{stat.name}</h4>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
              <div className="text-sm font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                {(statWeights[stat.id] || 0).toFixed(1)}
              </div>
            </div>
            
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={statWeights[stat.id] || stat.defaultWeight}
              onChange={(e) => onWeightChange(stat.id, parseFloat(e.target.value))}
              className="stat-slider"
            />
            
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
            
            {/* Background indicator */}
            <div 
              className="absolute bottom-0 left-0 h-1 bg-primary/30 transition-all duration-300"
              style={{ 
                width: `${((statWeights[stat.id] || stat.defaultWeight) / 2) * 100}%`,
                opacity: (statWeights[stat.id] || stat.defaultWeight) / 2
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatAdjuster;
