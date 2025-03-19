
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Team } from '../utils/teamData';
import { Check } from 'lucide-react';

interface TeamSelectorProps {
  teams: Team[];
  selectedTeams: Team[];
  onTeamSelect: (team: Team) => void;
  onTeamRemove: (team: Team) => void;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({
  teams,
  selectedTeams,
  onTeamSelect,
  onTeamRemove,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedTeams.some(selectedTeam => selectedTeam.id === team.id)
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Selected Teams */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-center">Selected Teams</h3>
        {selectedTeams.length === 0 ? (
          <motion.div 
            className="text-center text-muted-foreground italic py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Select teams to compare and predict
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence>
              {selectedTeams.map((team) => (
                <motion.div
                  key={team.id}
                  className="glass-card p-4 flex items-center justify-between group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center mr-3"
                      style={{ backgroundColor: team.colors.primary }}
                    >
                      <img 
                        src={team.logo} 
                        alt={`${team.name} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{team.name}</h4>
                      <p className="text-xs text-muted-foreground">Seed: {team.seed}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onTeamRemove(team)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-7 w-7 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Team Selector */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a team..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (!isOpen && e.target.value) setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-black/40 focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:outline-none shadow-sm transition-all duration-200"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </>
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-white dark:bg-black/40 shadow-lg rounded-lg mt-2 max-h-64 overflow-y-auto glass-card"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filteredTeams.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  {searchTerm ? 'No teams found' : 'No teams available'}
                </div>
              ) : (
                <div className="p-2">
                  {filteredTeams.map((team) => (
                    <motion.div
                      key={team.id}
                      className="flex items-center px-3 py-2 rounded-md hover:bg-secondary/50 cursor-pointer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        onTeamSelect(team);
                        setSearchTerm('');
                        setIsOpen(false);
                      }}
                    >
                      <div 
                        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center mr-3"
                        style={{ backgroundColor: team.colors.primary }}
                      >
                        <img 
                          src={team.logo} 
                          alt={`${team.name} logo`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{team.name}</h4>
                        <p className="text-xs text-muted-foreground">Seed: {team.seed}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeamSelector;
