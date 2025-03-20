export interface Team {
  id: string;
  name: string;
  seed: number;
  region: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
  stats: {
    [key: string]: number;
  };
}

export interface Stat {
  id: string;
  name: string;
  description: string;
  min: number;
  max: number;
  defaultWeight: number;
  format: (value: number) => string;
}

export const stats: Stat[] = [
  {
    id: "offensiveEfficiency",
    name: "Offensive Efficiency",
    description: "Points scored per 100 possessions",
    min: 90,
    max: 130,
    defaultWeight: 1,
    format: (value) => value.toFixed(1),
  },
  {
    id: "defensiveEfficiency",
    name: "Defensive Efficiency",
    description: "Points allowed per 100 possessions",
    min: 85,
    max: 110,
    defaultWeight: 1,
    format: (value) => value.toFixed(1),
  },
  {
    id: "pace",
    name: "Pace",
    description: "Possessions per 40 minutes",
    min: 60,
    max: 85,
    defaultWeight: 0.5,
    format: (value) => value.toFixed(1),
  },
  {
    id: "threePointPercentage",
    name: "3PT%",
    description: "Three-point shooting percentage",
    min: 30,
    max: 45,
    defaultWeight: 0.8,
    format: (value) => `${value.toFixed(1)}%`,
  },
  {
    id: "freeThrowPercentage",
    name: "FT%",
    description: "Free throw percentage",
    min: 65,
    max: 85,
    defaultWeight: 0.6,
    format: (value) => `${value.toFixed(1)}%`,
  },
  {
    id: "reboundRate",
    name: "Rebound Rate",
    description: "Percentage of rebounds secured",
    min: 45,
    max: 60,
    defaultWeight: 0.7,
    format: (value) => `${value.toFixed(1)}%`,
  },
  {
    id: "turnoverRate",
    name: "Turnover Rate",
    description: "Turnovers per 100 possessions",
    min: 12,
    max: 22,
    defaultWeight: 0.7,
    format: (value) => value.toFixed(1),
  },
  {
    id: "experienceRating",
    name: "Experience",
    description: "Team experience rating",
    min: 1,
    max: 5,
    defaultWeight: 0.6,
    format: (value) => value.toFixed(1),
  },
];

// 2024 March Madness teams
export const teams: Team[] = [
  // West Region
  {
    id: "uconn",
    name: "UConn",
    seed: 1,
    region: "East",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Connecticut_Huskies_logo.svg/800px-Connecticut_Huskies_logo.svg.png",
    colors: {
      primary: "#0E1A2F",
      secondary: "#E4002B",
    },
    stats: {
      offensiveEfficiency: 124.0,
      defensiveEfficiency: 92.0,
      pace: 69.5,
      threePointPercentage: 37.2,
      freeThrowPercentage: 75.8,
      reboundRate: 57.9,
      turnoverRate: 16.2,
      experienceRating: 4.2,
    },
  },
  {
    id: "seton_hall",
    name: "Seton Hall",
    seed: 16,
    region: "East",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Seton_Hall_Pirates_logo.svg/2560px-Seton_Hall_Pirates_logo.svg.png",
    colors: {
      primary: "#004488",
      secondary: "#FFFFFF",
    },
    stats: {
      offensiveEfficiency: 103.5,
      defensiveEfficiency: 101.2,
      pace: 66.8,
      threePointPercentage: 33.1,
      freeThrowPercentage: 70.2,
      reboundRate: 51.4,
      turnoverRate: 18.3,
      experienceRating: 3.2,
    },
  },
  {
    id: "iowa_state",
    name: "Iowa State",
    seed: 2,
    region: "East",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Iowa_State_Cyclones_logo.svg/1200px-Iowa_State_Cyclones_logo.svg.png",
    colors: {
      primary: "#C8102E",
      secondary: "#F1BE48",
    },
    stats: {
      offensiveEfficiency: 114.2,
      defensiveEfficiency: 91.8,
      pace: 68.9,
      threePointPercentage: 34.5,
      freeThrowPercentage: 74.1,
      reboundRate: 52.7,
      turnoverRate: 15.4,
      experienceRating: 3.9,
    },
  },
  {
    id: "south_dakota_state",
    name: "South Dakota St",
    seed: 15,
    region: "East",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/South_Dakota_State_Jackrabbits_logo.svg/1200px-South_Dakota_State_Jackrabbits_logo.svg.png",
    colors: {
      primary: "#0033A0",
      secondary: "#FAE042",
    },
    stats: {
      offensiveEfficiency: 106.3,
      defensiveEfficiency: 99.8,
      pace: 67.2,
      threePointPercentage: 35.6,
      freeThrowPercentage: 72.5,
      reboundRate: 49.8,
      turnoverRate: 17.1,
      experienceRating: 3.0,
    },
  },
  {
    id: "illinois",
    name: "Illinois",
    seed: 3,
    region: "East",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1200px-Illinois_Fighting_Illini_logo.svg.png",
    colors: {
      primary: "#E84A27",
      secondary: "#13294B",
    },
    stats: {
      offensiveEfficiency: 117.8,
      defensiveEfficiency: 93.5,
      pace: 70.1,
      threePointPercentage: 36.8,
      freeThrowPercentage: 73.5,
      reboundRate: 54.3,
      turnoverRate: 16.5,
      experienceRating: 3.8,
    },
  },
  {
    id: "morehead_state",
    name: "Morehead State",
    seed: 14,
    region: "East",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Morehead_State_Eagles_logo.svg/1200px-Morehead_State_Eagles_logo.svg.png",
    colors: {
      primary: "#0033A0",
      secondary: "#FFC72C",
    },
    stats: {
      offensiveEfficiency: 105.7,
      defensiveEfficiency: 98.9,
      pace: 66.4,
      threePointPercentage: 34.2,
      freeThrowPercentage: 71.8,
      reboundRate: 50.2,
      turnoverRate: 18.7,
      experienceRating: 2.9,
    },
  },
  {
    id: "auburn",
    name: "Auburn",
    seed: 4,
    region: "East",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Auburn_Tigers_logo.svg/1200px-Auburn_Tigers_logo.svg.png",
    colors: {
      primary: "#0C2340",
      secondary: "#E87722",
    },
    stats: {
      offensiveEfficiency: 116.5,
      defensiveEfficiency: 94.1,
      pace: 71.3,
      threePointPercentage: 36.1,
      freeThrowPercentage: 72.9,
      reboundRate: 53.8,
      turnoverRate: 16.0,
      experienceRating: 3.6,
    },
  },
  {
    id: "yale",
    name: "Yale",
    seed: 13,
    region: "East",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Yale_Bulldogs_logo.svg/1200px-Yale_Bulldogs_logo.svg.png",
    colors: {
      primary: "#00356B",
      secondary: "#FFFFFF",
    },
    stats: {
      offensiveEfficiency: 107.2,
      defensiveEfficiency: 97.6,
      pace: 65.8,
      threePointPercentage: 34.9,
      freeThrowPercentage: 73.2,
      reboundRate: 51.5,
      turnoverRate: 17.4,
      experienceRating: 3.1,
    },
  },
  // Add more teams for East region (seeds 5-8 with their 12-9 opponents)
  
  // West Region - 8 teams
  {
    id: "north_carolina",
    name: "North Carolina",
    seed: 1,
    region: "West",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/1280px-North_Carolina_Tar_Heels_logo.svg.png",
    colors: {
      primary: "#7BAFD4",
      secondary: "#FFFFFF",
    },
    stats: {
      offensiveEfficiency: 119.7,
      defensiveEfficiency: 93.5,
      pace: 68.1,
      threePointPercentage: 37.8,
      freeThrowPercentage: 76.3,
      reboundRate: 53.9,
      turnoverRate: 14.5,
      experienceRating: 4.0,
    },
  },
  {
    id: "howard",
    name: "Howard",
    seed: 16,
    region: "West",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Howard_Bison_logo.svg/1200px-Howard_Bison_logo.svg.png",
    colors: {
      primary: "#003A63",
      secondary: "#E51937",
    },
    stats: {
      offensiveEfficiency: 102.8,
      defensiveEfficiency: 102.5,
      pace: 66.2,
      threePointPercentage: 32.7,
      freeThrowPercentage: 69.4,
      reboundRate: 48.6,
      turnoverRate: 19.1,
      experienceRating: 2.8,
    },
  },
  {
    id: "arizona",
    name: "Arizona",
    seed: 2,
    region: "West",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Arizona_Wildcats_logo.svg/1024px-Arizona_Wildcats_logo.svg.png",
    colors: {
      primary: "#CC0033",
      secondary: "#003366",
    },
    stats: {
      offensiveEfficiency: 118.9,
      defensiveEfficiency: 94.7,
      pace: 70.5,
      threePointPercentage: 37.1,
      freeThrowPercentage: 73.8,
      reboundRate: 54.1,
      turnoverRate: 15.8,
      experienceRating: 3.7,
    },
  },
  {
    id: "long_beach_state",
    name: "Long Beach St",
    seed: 15,
    region: "West",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Long_Beach_State_Beach_logo.svg/800px-Long_Beach_State_Beach_logo.svg.png",
    colors: {
      primary: "#FFC72C",
      secondary: "#000000",
    },
    stats: {
      offensiveEfficiency: 105.1,
      defensiveEfficiency: 100.2,
      pace: 68.3,
      threePointPercentage: 33.8,
      freeThrowPercentage: 71.3,
      reboundRate: 49.5,
      turnoverRate: 18.2,
      experienceRating: 2.9,
    },
  },
  
  // Add more teams for West region
  
  // South Region - just sample teams
  {
    id: "houston",
    name: "Houston",
    seed: 1,
    region: "South",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Houston_Cougars_logo.svg/800px-Houston_Cougars_logo.svg.png",
    colors: {
      primary: "#C8102E",
      secondary: "#76232F",
    },
    stats: {
      offensiveEfficiency: 118.3,
      defensiveEfficiency: 88.6,
      pace: 65.9,
      threePointPercentage: 35.7,
      freeThrowPercentage: 71.2,
      reboundRate: 56.7,
      turnoverRate: 17.3,
      experienceRating: 4.1,
    },
  },
  {
    id: "montana_state",
    name: "Montana State",
    seed: 16,
    region: "South",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Montana_State_Bobcats_logo.svg/800px-Montana_State_Bobcats_logo.svg.png",
    colors: {
      primary: "#003588",
      secondary: "#B9975B",
    },
    stats: {
      offensiveEfficiency: 103.1,
      defensiveEfficiency: 101.7,
      pace: 66.5,
      threePointPercentage: 33.5,
      freeThrowPercentage: 70.8,
      reboundRate: 50.1,
      turnoverRate: 18.6,
      experienceRating: 2.7,
    },
  },
  
  // Midwest Region - just sample teams
  {
    id: "purdue",
    name: "Purdue",
    seed: 1,
    region: "Midwest",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Purdue_University_Monogram.svg/640px-Purdue_University_Monogram.svg.png",
    colors: {
      primary: "#CFB991",
      secondary: "#000000",
    },
    stats: {
      offensiveEfficiency: 120.5,
      defensiveEfficiency: 97.2,
      pace: 67.8,
      threePointPercentage: 39.2,
      freeThrowPercentage: 70.5,
      reboundRate: 55.3,
      turnoverRate: 14.8,
      experienceRating: 3.7,
    },
  },
  {
    id: "grambling",
    name: "Grambling",
    seed: 16,
    region: "Midwest",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Grambling_State_Tigers_logo.svg/800px-Grambling_State_Tigers_logo.svg.png",
    colors: {
      primary: "#F88F1E",
      secondary: "#000000",
    },
    stats: {
      offensiveEfficiency: 102.4,
      defensiveEfficiency: 102.1,
      pace: 66.1,
      threePointPercentage: 32.9,
      freeThrowPercentage: 69.7,
      reboundRate: 49.3,
      turnoverRate: 19.4,
      experienceRating: 2.6,
    },
  },
  
  // Add the remaining teams in each region
  
  // Add a few more representative teams for each region to test with
  {
    id: "tennessee",
    name: "Tennessee",
    seed: 2,
    region: "Midwest",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tennessee_Volunteers_logo.svg/640px-Tennessee_Volunteers_logo.svg.png",
    colors: {
      primary: "#FF8200",
      secondary: "#FFFFFF",
    },
    stats: {
      offensiveEfficiency: 113.8,
      defensiveEfficiency: 91.2,
      pace: 67.5,
      threePointPercentage: 35.9,
      freeThrowPercentage: 71.7,
      reboundRate: 54.8,
      turnoverRate: 16.7,
      experienceRating: 4.3,
    },
  },
  {
    id: "kentucky",
    name: "Kentucky",
    seed: 3,
    region: "South",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Kentucky_Wildcats_logo.svg/1024px-Kentucky_Wildcats_logo.svg.png",
    colors: {
      primary: "#0033A0",
      secondary: "#FFFFFF",
    },
    stats: {
      offensiveEfficiency: 117.2,
      defensiveEfficiency: 95.1,
      pace: 71.8,
      threePointPercentage: 36.4,
      freeThrowPercentage: 73.1,
      reboundRate: 53.2,
      turnoverRate: 15.5,
      experienceRating: 3.4,
    },
  },
  {
    id: "duke",
    name: "Duke",
    seed: 4,
    region: "South",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Athletics_logo.svg/1200px-Duke_Athletics_logo.svg.png",
    colors: {
      primary: "#001A57",
      secondary: "#FFFFFF",
    },
    stats: {
      offensiveEfficiency: 117.6,
      defensiveEfficiency: 93.9,
      pace: 68.4,
      threePointPercentage: 36.5,
      freeThrowPercentage: 74.1,
      reboundRate: 54.5,
      turnoverRate: 15.3,
      experienceRating: 3.5,
    },
  },
  {
    id: "gonzaga",
    name: "Gonzaga",
    seed: 5,
    region: "Midwest",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/800px-Gonzaga_Bulldogs_logo.svg.png",
    colors: {
      primary: "#002967",
      secondary: "#C8102E",
    },
    stats: {
      offensiveEfficiency: 122.8,
      defensiveEfficiency: 95.4,
      pace: 72.3,
      threePointPercentage: 38.5,
      freeThrowPercentage: 72.4,
      reboundRate: 54.2,
      turnoverRate: 15.1,
      experienceRating: 3.9,
    },
  },
  {
    id: "alabama",
    name: "Alabama",
    seed: 4,
    region: "West",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Alabama_Crimson_Tide_logo.svg/1200px-Alabama_Crimson_Tide_logo.svg.png",
    colors: {
      primary: "#9E1B32",
      secondary: "#FFFFFF",
    },
    stats: {
      offensiveEfficiency: 121.2,
      defensiveEfficiency: 96.8,
      pace: 73.9,
      threePointPercentage: 37.3,
      freeThrowPercentage: 72.5,
      reboundRate: 52.7,
      turnoverRate: 15.9,
      experienceRating: 3.6,
    },
  },
  {
    id: "northwestern",
    name: "Northwestern",
    seed: 9,
    region: "East",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/77.png",
    colors: {
      primary: "#4E2A84",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 115.3,
      defensiveEfficiency: 98.6,
      pace: 66.6,
      strengthOfSchedule: 0.51,
      netRanking: 37
    }
  },
  {
    id: "boise-state",
    name: "Boise State",
    seed: 10,
    region: "South",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/68.png",
    colors: {
      primary: "#09347A",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 115.2,
      defensiveEfficiency: 98.5,
      pace: 67.3,
      strengthOfSchedule: 0.50,
      netRanking: 38
    }
  },
  {
    id: "colorado-state",
    name: "Colorado State",
    seed: 10,
    region: "Midwest",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/36.png",
    colors: {
      primary: "#1E4D8C",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 115.1,
      defensiveEfficiency: 98.7,
      pace: 67.5,
      strengthOfSchedule: 0.49,
      netRanking: 39
    }
  },
  {
    id: "nevada",
    name: "Nevada",
    seed: 10,
    region: "West",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2440.png",
    colors: {
      primary: "#153E7D",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 115.0,
      defensiveEfficiency: 98.8,
      pace: 67.6,
      strengthOfSchedule: 0.48,
      netRanking: 40
    }
  },
  {
    id: "virginia",
    name: "Virginia",
    seed: 10,
    region: "East",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/258.png",
    colors: {
      primary: "#232D4B",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.9,
      defensiveEfficiency: 98.9,
      pace: 67.8,
      strengthOfSchedule: 0.47,
      netRanking: 41
    }
  },
  {
    id: "nc-state",
    name: "NC State",
    seed: 11,
    region: "South",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/152.png",
    colors: {
      primary: "#CC0000",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.8,
      defensiveEfficiency: 99.0,
      pace: 68.0,
      strengthOfSchedule: 0.46,
      netRanking: 42
    }
  },
  {
    id: "new-mexico",
    name: "New Mexico",
    seed: 11,
    region: "Midwest",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/200.png",
    colors: {
      primary: "#BA0C2F",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.7,
      defensiveEfficiency: 99.1,
      pace: 68.2,
      strengthOfSchedule: 0.45,
      netRanking: 43
    }
  },
  {
    id: "oregon",
    name: "Oregon",
    seed: 11,
    region: "West",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png",
    colors: {
      primary: "#154733",
      secondary: "#FEE123"
    },
    stats: {
      offensiveEfficiency: 114.6,
      defensiveEfficiency: 99.2,
      pace: 68.4,
      strengthOfSchedule: 0.44,
      netRanking: 44
    }
  },
  {
    id: "duquesne",
    name: "Duquesne",
    seed: 11,
    region: "East",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2132.png",
    colors: {
      primary: "#0D1B2A",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.5,
      defensiveEfficiency: 99.3,
      pace: 68.6,
      strengthOfSchedule: 0.43,
      netRanking: 45
    }
  },
  {
    id: "james-madison",
    name: "James Madison",
    seed: 12,
    region: "South",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png",
    colors: {
      primary: "#4A2C2A",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.4,
      defensiveEfficiency: 99.4,
      pace: 68.8,
      strengthOfSchedule: 0.42,
      netRanking: 46
    }
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon",
    seed: 12,
    region: "Midwest",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/3012.png",
    colors: {
      primary: "#862633",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.3,
      defensiveEfficiency: 99.5,
      pace: 69.0,
      strengthOfSchedule: 0.41,
      netRanking: 47
    }
  },
  {
    id: "mcneese-state",
    name: "McNeese State",
    seed: 12,
    region: "West",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2569.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.2,
      defensiveEfficiency: 99.6,
      pace: 69.2,
      strengthOfSchedule: 0.40,
      netRanking: 48
    }
  },
  {
    id: "uab",
    name: "UAB",
    seed: 12,
    region: "East",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/5.png",
    colors: {
      primary: "#0033A0",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.1,
      defensiveEfficiency: 99.7,
      pace: 69.4,
      strengthOfSchedule: 0.39,
      netRanking: 49
    }
  },
  {
    id: "vermont",
    name: "Vermont",
    seed: 13,
    region: "South",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/261.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 114.0,
      defensiveEfficiency: 99.8,
      pace: 69.6,
      strengthOfSchedule: 0.38,
      netRanking: 50
    }
  },
  {
    id: "yale",
    name: "Yale",
    seed: 13,
    region: "Midwest",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/164.png",
    colors: {
      primary: "#00356B",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.9,
      defensiveEfficiency: 99.9,
      pace: 69.8,
      strengthOfSchedule: 0.37,
      netRanking: 51
    }
  },
  {
    id: "charleston",
    name: "Charleston",
    seed: 13,
    region: "West",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2288.png",
    colors: {
      primary: "#CC0033",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.8,
      defensiveEfficiency: 100.0,
      pace: 70.0,
      strengthOfSchedule: 0.36,
      netRanking: 52
    }
  },
  {
    id: "samford",
    name: "Samford",
    seed: 13,
    region: "East",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/290.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.7,
      defensiveEfficiency: 100.1,
      pace: 70.2,
      strengthOfSchedule: 0.35,
      netRanking: 53
    }
  },
  {
    id: "akron",
    name: "Akron",
    seed: 14,
    region: "South",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2006.png",
    colors: {
      primary: "#041E42",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.6,
      defensiveEfficiency: 100.2,
      pace: 70.4,
      strengthOfSchedule: 0.34,
      netRanking: 54
    }
  },
  {
    id: "morehead-state",
    name: "Morehead State",
    seed: 14,
    region: "Midwest",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/98.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.5,
      defensiveEfficiency: 100.3,
      pace: 70.6,
      strengthOfSchedule: 0.33,
      netRanking: 55
    }
  },
  {
    id: "colgate",
    name: "Colgate",
    seed: 14,
    region: "West",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2002.png",
    colors: {
      primary: "#841617",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.4,
      defensiveEfficiency: 100.4,
      pace: 70.8,
      strengthOfSchedule: 0.32,
      netRanking: 56
    }
  },
  {
    id: "oakland",
    name: "Oakland",
    seed: 14,
    region: "East",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/4.png",
    colors: {
      primary: "#C8102E",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.3,
      defensiveEfficiency: 100.5,
      pace: 71.0,
      strengthOfSchedule: 0.31,
      netRanking: 57
    }
  },
  {
    id: "longwood",
    name: "Longwood",
    seed: 15,
    region: "South",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2557.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.2,
      defensiveEfficiency: 100.6,
      pace: 71.2,
      strengthOfSchedule: 0.30,
      netRanking: 58
    }
  },
  {
    id: "saint-peters",
    name: "Saint Peter's",
    seed: 15,
    region: "Midwest",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2600.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.1,
      defensiveEfficiency: 100.7,
      pace: 71.4,
      strengthOfSchedule: 0.29,
      netRanking: 59
    }
  },
  {
    id: "montana-state",
    name: "Montana State",
    seed: 15,
    region: "West",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/147.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 113.0,
      defensiveEfficiency: 100.8,
      pace: 71.6,
      strengthOfSchedule: 0.28,
      netRanking: 60
    }
  },
  {
    id: "south-dakota-state",
    name: "South Dakota State",
    seed: 15,
    region: "East",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2571.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 112.9,
      defensiveEfficiency: 100.9,
      pace: 71.8,
      strengthOfSchedule: 0.27,
      netRanking: 61
    }
  },
  {
    id: "wagner",
    name: "Wagner",
    seed: 16,
    region: "South",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2654.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 112.8,
      defensiveEfficiency: 101.0,
      pace: 72.0,
      strengthOfSchedule: 0.26,
      netRanking: 62
    }
  },
  {
    id: "howard",
    name: "Howard",
    seed: 16,
    region: "Midwest",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2368.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 112.7,
      defensiveEfficiency: 101.1,
      pace: 72.2,
      strengthOfSchedule: 0.25,
      netRanking: 63
    }
  },
  {
    id: "montana",
    name: "Montana",
    seed: 16,
    region: "West",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/147.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 112.6,
      defensiveEfficiency: 101.2,
      pace: 72.4,
      strengthOfSchedule: 0.24,
      netRanking: 64
    }
  },
  {
    id: "stetson",
    name: "Stetson",
    seed: 16,
    region: "East",
    logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/263.png",
    colors: {
      primary: "#003875",
      secondary: "#FFFFFF"
    },
    stats: {
      offensiveEfficiency: 112.5,
      defensiveEfficiency: 101.3,
      pace: 72.6,
      strengthOfSchedule: 0.23,
      netRanking: 65
    }
  }
];

export const fetchMarchMadnessTeams = async (): Promise<Team[]> => {
  const teams: Team[] = [
    {
      id: "uconn",
      name: "UConn",
      seed: 1,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/41.png",
      colors: {
        primary: "#000E2F",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 122.5,
        defensiveEfficiency: 94.2,
        pace: 67.8,
        strengthOfSchedule: 0.85,
        netRanking: 1
      }
    },
    {
      id: "north-carolina",
      name: "North Carolina",
      seed: 1,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/153.png",
      colors: {
        primary: "#7BAFD4",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 119.8,
        defensiveEfficiency: 96.5,
        pace: 70.2,
        strengthOfSchedule: 0.82,
        netRanking: 2
      }
    },
    {
      id: "houston",
      name: "Houston",
      seed: 1,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/248.png",
      colors: {
        primary: "#C8102E",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 118.9,
        defensiveEfficiency: 93.8,
        pace: 66.4,
        strengthOfSchedule: 0.81,
        netRanking: 3
      }
    },
    {
      id: "purdue",
      name: "Purdue",
      seed: 1,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2509.png",
      colors: {
        primary: "#CEB888",
        secondary: "#000000"
      },
      stats: {
        offensiveEfficiency: 121.2,
        defensiveEfficiency: 95.7,
        pace: 68.9,
        strengthOfSchedule: 0.83,
        netRanking: 4
      }
    },
    {
      id: "iowa-state",
      name: "Iowa State",
      seed: 2,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/66.png",
      colors: {
        primary: "#C8102E",
        secondary: "#F1BE48"
      },
      stats: {
        offensiveEfficiency: 117.8,
        defensiveEfficiency: 94.5,
        pace: 67.2,
        strengthOfSchedule: 0.80,
        netRanking: 5
      }
    },
    {
      id: "arizona",
      name: "Arizona",
      seed: 2,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/12.png",
      colors: {
        primary: "#00205B",
        secondary: "#AB0520"
      },
      stats: {
        offensiveEfficiency: 120.5,
        defensiveEfficiency: 97.2,
        pace: 71.5,
        strengthOfSchedule: 0.79,
        netRanking: 6
      }
    },
    {
      id: "marquette",
      name: "Marquette",
      seed: 2,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/269.png",
      colors: {
        primary: "#003875",
        secondary: "#FFD100"
      },
      stats: {
        offensiveEfficiency: 119.2,
        defensiveEfficiency: 96.8,
        pace: 69.8,
        strengthOfSchedule: 0.78,
        netRanking: 7
      }
    },
    {
      id: "tennessee",
      name: "Tennessee",
      seed: 2,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png",
      colors: {
        primary: "#FF8200",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 116.5,
        defensiveEfficiency: 94.1,
        pace: 66.8,
        strengthOfSchedule: 0.77,
        netRanking: 8
      }
    },
    {
      id: "illinois",
      name: "Illinois",
      seed: 3,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/356.png",
      colors: {
        primary: "#13294B",
        secondary: "#E84A27"
      },
      stats: {
        offensiveEfficiency: 118.7,
        defensiveEfficiency: 97.5,
        pace: 70.4,
        strengthOfSchedule: 0.76,
        netRanking: 9
      }
    },
    {
      id: "baylor",
      name: "Baylor",
      seed: 3,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/239.png",
      colors: {
        primary: "#003875",
        secondary: "#FFD100"
      },
      stats: {
        offensiveEfficiency: 119.5,
        defensiveEfficiency: 98.2,
        pace: 69.6,
        strengthOfSchedule: 0.75,
        netRanking: 10
      }
    },
    {
      id: "kentucky",
      name: "Kentucky",
      seed: 3,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/96.png",
      colors: {
        primary: "#0033A0",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 121.8,
        defensiveEfficiency: 98.5,
        pace: 71.2,
        strengthOfSchedule: 0.74,
        netRanking: 11
      }
    },
    {
      id: "creighton",
      name: "Creighton",
      seed: 3,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/156.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 120.2,
        defensiveEfficiency: 97.8,
        pace: 68.7,
        strengthOfSchedule: 0.73,
        netRanking: 12
      }
    },
    {
      id: "auburn",
      name: "Auburn",
      seed: 4,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2.png",
      colors: {
        primary: "#0C2340",
        secondary: "#FFD100"
      },
      stats: {
        offensiveEfficiency: 117.9,
        defensiveEfficiency: 95.4,
        pace: 70.8,
        strengthOfSchedule: 0.72,
        netRanking: 13
      }
    },
    {
      id: "duke",
      name: "Duke",
      seed: 4,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/150.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 118.4,
        defensiveEfficiency: 96.2,
        pace: 68.5,
        strengthOfSchedule: 0.71,
        netRanking: 14
      }
    },
    {
      id: "kansas",
      name: "Kansas",
      seed: 4,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2305.png",
      colors: {
        primary: "#0051BA",
        secondary: "#FFD100"
      },
      stats: {
        offensiveEfficiency: 117.2,
        defensiveEfficiency: 95.8,
        pace: 69.1,
        strengthOfSchedule: 0.70,
        netRanking: 15
      }
    },
    {
      id: "alabama",
      name: "Alabama",
      seed: 4,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/333.png",
      colors: {
        primary: "#9E1B32",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 122.1,
        defensiveEfficiency: 98.7,
        pace: 72.0,
        strengthOfSchedule: 0.69,
        netRanking: 16
      }
    },
    {
      id: "san-diego-state",
      name: "San Diego State",
      seed: 5,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/21.png",
      colors: {
        primary: "#000000",
        secondary: "#C4C4C4"
      },
      stats: {
        offensiveEfficiency: 115.8,
        defensiveEfficiency: 96.4,
        pace: 67.5,
        strengthOfSchedule: 0.68,
        netRanking: 17
      }
    },
    {
      id: "wisconsin",
      name: "Wisconsin",
      seed: 5,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/275.png",
      colors: {
        primary: "#C8102E",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 116.2,
        defensiveEfficiency: 97.1,
        pace: 65.8,
        strengthOfSchedule: 0.67,
        netRanking: 18
      }
    },
    {
      id: "gonzaga",
      name: "Gonzaga",
      seed: 5,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2250.png",
      colors: {
        primary: "#041E42",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 119.7,
        defensiveEfficiency: 98.4,
        pace: 70.6,
        strengthOfSchedule: 0.66,
        netRanking: 19
      }
    },
    {
      id: "colorado",
      name: "Colorado",
      seed: 5,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/38.png",
      colors: {
        primary: "#CFB87C",
        secondary: "#000000"
      },
      stats: {
        offensiveEfficiency: 117.5,
        defensiveEfficiency: 97.9,
        pace: 68.3,
        strengthOfSchedule: 0.65,
        netRanking: 20
      }
    },
    {
      id: "byu",
      name: "BYU",
      seed: 6,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/252.png",
      colors: {
        primary: "#002E5D",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 118.2,
        defensiveEfficiency: 98.1,
        pace: 70.0,
        strengthOfSchedule: 0.64,
        netRanking: 21
      }
    },
    {
      id: "clemson",
      name: "Clemson",
      seed: 6,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
      colors: {
        primary: "#F66733",
        secondary: "#522D80"
      },
      stats: {
        offensiveEfficiency: 116.8,
        defensiveEfficiency: 97.3,
        pace: 67.9,
        strengthOfSchedule: 0.63,
        netRanking: 22
      }
    },
    {
      id: "south-carolina",
      name: "South Carolina",
      seed: 6,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2579.png",
      colors: {
        primary: "#73000A",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.9,
        defensiveEfficiency: 96.7,
        pace: 68.1,
        strengthOfSchedule: 0.62,
        netRanking: 23
      }
    },
    {
      id: "texas-tech",
      name: "Texas Tech",
      seed: 6,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png",
      colors: {
        primary: "#CC0000",
        secondary: "#000000"
      },
      stats: {
        offensiveEfficiency: 116.4,
        defensiveEfficiency: 97.0,
        pace: 69.3,
        strengthOfSchedule: 0.61,
        netRanking: 24
      }
    },
    {
      id: "dayton",
      name: "Dayton",
      seed: 7,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2000.png",
      colors: {
        primary: "#C8102E",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 117.1,
        defensiveEfficiency: 98.0,
        pace: 68.4,
        strengthOfSchedule: 0.60,
        netRanking: 25
      }
    },
    {
      id: "washington-state",
      name: "Washington State",
      seed: 7,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/265.png",
      colors: {
        primary: "#981E32",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.7,
        defensiveEfficiency: 97.4,
        pace: 67.7,
        strengthOfSchedule: 0.59,
        netRanking: 26
      }
    },
    {
      id: "texas",
      name: "Texas",
      seed: 7,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/251.png",
      colors: {
        primary: "#BF5700",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 116.0,
        defensiveEfficiency: 97.6,
        pace: 69.5,
        strengthOfSchedule: 0.58,
        netRanking: 27
      }
    },
    {
      id: "florida",
      name: "Florida",
      seed: 7,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/57.png",
      colors: {
        primary: "#0021A5",
        secondary: "#FA4616"
      },
      stats: {
        offensiveEfficiency: 117.3,
        defensiveEfficiency: 98.3,
        pace: 70.7,
        strengthOfSchedule: 0.57,
        netRanking: 28
      }
    },
    {
      id: "nebraska",
      name: "Nebraska",
      seed: 8,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/158.png",
      colors: {
        primary: "#E41E3F",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.6,
        defensiveEfficiency: 97.7,
        pace: 68.2,
        strengthOfSchedule: 0.56,
        netRanking: 29
      }
    },
    {
      id: "utah-state",
      name: "Utah State",
      seed: 8,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/328.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 118.0,
        defensiveEfficiency: 98.6,
        pace: 70.9,
        strengthOfSchedule: 0.55,
        netRanking: 30
      }
    },
    {
      id: "mississippi-state",
      name: "Mississippi State",
      seed: 8,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/344.png",
      colors: {
        primary: "#660000",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.5,
        defensiveEfficiency: 97.2,
        pace: 67.6,
        strengthOfSchedule: 0.54,
        netRanking: 31
      }
    },
    {
      id: "florida-atlantic",
      name: "Florida Atlantic",
      seed: 8,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2229.png",
      colors: {
        primary: "#003875",
        secondary: "#CC0033"
      },
      stats: {
        offensiveEfficiency: 117.6,
        defensiveEfficiency: 98.5,
        pace: 70.3,
        strengthOfSchedule: 0.53,
        netRanking: 32
      }
    },
    {
      id: "texas-am",
      name: "Texas A&M",
      seed: 9,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/245.png",
      colors: {
        primary: "#500000",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.4,
        defensiveEfficiency: 97.5,
        pace: 68.8,
        strengthOfSchedule: 0.52,
        netRanking: 33
      }
    },
    {
      id: "tcu",
      name: "TCU",
      seed: 9,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2628.png",
      colors: {
        primary: "#4D1979",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 117.0,
        defensiveEfficiency: 98.2,
        pace: 70.5,
        strengthOfSchedule: 0.51,
        netRanking: 34
      }
    },
    {
      id: "michigan-state",
      name: "Michigan State",
      seed: 9,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/127.png",
      colors: {
        primary: "#18453B",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.3,
        defensiveEfficiency: 97.6,
        pace: 67.4,
        strengthOfSchedule: 0.50,
        netRanking: 35
      }
    },
    {
      id: "northwestern",
      name: "Northwestern",
      seed: 9,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/77.png",
      colors: {
        primary: "#4E2A84",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 116.1,
        defensiveEfficiency: 97.8,
        pace: 68.6,
        strengthOfSchedule: 0.49,
        netRanking: 36
      }
    },
    {
      id: "boise-state",
      name: "Boise State",
      seed: 10,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/68.png",
      colors: {
        primary: "#09347A",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.2,
        defensiveEfficiency: 97.7,
        pace: 69.0,
        strengthOfSchedule: 0.48,
        netRanking: 37
      }
    },
    {
      id: "colorado-state",
      name: "Colorado State",
      seed: 10,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/36.png",
      colors: {
        primary: "#1E4D8C",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 117.4,
        defensiveEfficiency: 98.4,
        pace: 70.1,
        strengthOfSchedule: 0.47,
        netRanking: 38
      }
    },
    {
      id: "nevada",
      name: "Nevada",
      seed: 10,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2440.png",
      colors: {
        primary: "#153E7D",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.1,
        defensiveEfficiency: 97.8,
        pace: 68.9,
        strengthOfSchedule: 0.46,
        netRanking: 39
      }
    },
    {
      id: "virginia",
      name: "Virginia",
      seed: 10,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/258.png",
      colors: {
        primary: "#041E42",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 115.0,
        defensiveEfficiency: 97.9,
        pace: 67.3,
        strengthOfSchedule: 0.45,
        netRanking: 40
      }
    },
    {
      id: "nc-state",
      name: "NC State",
      seed: 11,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/152.png",
      colors: {
        primary: "#CC0000",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.9,
        defensiveEfficiency: 98.0,
        pace: 69.2,
        strengthOfSchedule: 0.44,
        netRanking: 41
      }
    },
    {
      id: "new-mexico",
      name: "New Mexico",
      seed: 11,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/167.png",
      colors: {
        primary: "#BA0C2F",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 117.7,
        defensiveEfficiency: 98.6,
        pace: 70.8,
        strengthOfSchedule: 0.43,
        netRanking: 42
      }
    },
    {
      id: "oregon",
      name: "Oregon",
      seed: 11,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png",
      colors: {
        primary: "#154733",
        secondary: "#FEE123"
      },
      stats: {
        offensiveEfficiency: 116.3,
        defensiveEfficiency: 98.1,
        pace: 70.4,
        strengthOfSchedule: 0.42,
        netRanking: 43
      }
    },
    {
      id: "duquesne",
      name: "Duquesne",
      seed: 11,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2132.png",
      colors: {
        primary: "#0D1B2A",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.8,
        defensiveEfficiency: 98.1,
        pace: 68.5,
        strengthOfSchedule: 0.41,
        netRanking: 44
      }
    },
    {
      id: "james-madison",
      name: "James Madison",
      seed: 12,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png",
      colors: {
        primary: "#4A2C2A",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.7,
        defensiveEfficiency: 98.2,
        pace: 69.6,
        strengthOfSchedule: 0.40,
        netRanking: 45
      }
    },
    {
      id: "grand-canyon",
      name: "Grand Canyon",
      seed: 12,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/3012.png",
      colors: {
        primary: "#862633",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.6,
        defensiveEfficiency: 98.3,
        pace: 69.8,
        strengthOfSchedule: 0.39,
        netRanking: 46
      }
    },
    {
      id: "mcneese-state",
      name: "McNeese State",
      seed: 12,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2569.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.5,
        defensiveEfficiency: 98.4,
        pace: 70.0,
        strengthOfSchedule: 0.38,
        netRanking: 47
      }
    },
    {
      id: "uab",
      name: "UAB",
      seed: 12,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/5.png",
      colors: {
        primary: "#0033A0",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.4,
        defensiveEfficiency: 98.5,
        pace: 70.2,
        strengthOfSchedule: 0.37,
        netRanking: 48
      }
    },
    {
      id: "vermont",
      name: "Vermont",
      seed: 13,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/261.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.3,
        defensiveEfficiency: 98.6,
        pace: 70.4,
        strengthOfSchedule: 0.36,
        netRanking: 49
      }
    },
    {
      id: "yale",
      name: "Yale",
      seed: 13,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/164.png",
      colors: {
        primary: "#00356B",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.2,
        defensiveEfficiency: 98.7,
        pace: 70.6,
        strengthOfSchedule: 0.35,
        netRanking: 50
      }
    },
    {
      id: "charleston",
      name: "Charleston",
      seed: 13,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2288.png",
      colors: {
        primary: "#CC0033",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.1,
        defensiveEfficiency: 98.8,
        pace: 70.8,
        strengthOfSchedule: 0.34,
        netRanking: 51
      }
    },
    {
      id: "samford",
      name: "Samford",
      seed: 13,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/290.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 114.0,
        defensiveEfficiency: 98.9,
        pace: 71.0,
        strengthOfSchedule: 0.33,
        netRanking: 52
      }
    },
    {
      id: "akron",
      name: "Akron",
      seed: 14,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2006.png",
      colors: {
        primary: "#041E42",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.9,
        defensiveEfficiency: 99.0,
        pace: 71.2,
        strengthOfSchedule: 0.32,
        netRanking: 53
      }
    },
    {
      id: "morehead-state",
      name: "Morehead State",
      seed: 14,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/98.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.8,
        defensiveEfficiency: 99.1,
        pace: 71.4,
        strengthOfSchedule: 0.31,
        netRanking: 54
      }
    },
    {
      id: "colgate",
      name: "Colgate",
      seed: 14,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2002.png",
      colors: {
        primary: "#841617",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.7,
        defensiveEfficiency: 99.2,
        pace: 71.6,
        strengthOfSchedule: 0.30,
        netRanking: 55
      }
    },
    {
      id: "oakland",
      name: "Oakland",
      seed: 14,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/4.png",
      colors: {
        primary: "#C8102E",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.6,
        defensiveEfficiency: 99.3,
        pace: 71.8,
        strengthOfSchedule: 0.29,
        netRanking: 56
      }
    },
    {
      id: "longwood",
      name: "Longwood",
      seed: 15,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2557.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.5,
        defensiveEfficiency: 99.4,
        pace: 72.0,
        strengthOfSchedule: 0.28,
        netRanking: 57
      }
    },
    {
      id: "saint-peters",
      name: "Saint Peter's",
      seed: 15,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2600.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.4,
        defensiveEfficiency: 99.5,
        pace: 72.2,
        strengthOfSchedule: 0.27,
        netRanking: 58
      }
    },
    {
      id: "montana-state",
      name: "Montana State",
      seed: 15,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/147.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.3,
        defensiveEfficiency: 99.6,
        pace: 72.4,
        strengthOfSchedule: 0.26,
        netRanking: 59
      }
    },
    {
      id: "south-dakota-state",
      name: "South Dakota State",
      seed: 15,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2571.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.2,
        defensiveEfficiency: 99.7,
        pace: 72.6,
        strengthOfSchedule: 0.25,
        netRanking: 60
      }
    },
    {
      id: "wagner",
      name: "Wagner",
      seed: 16,
      region: "South",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2654.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.1,
        defensiveEfficiency: 99.8,
        pace: 72.8,
        strengthOfSchedule: 0.24,
        netRanking: 61
      }
    },
    {
      id: "howard",
      name: "Howard",
      seed: 16,
      region: "Midwest",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/2368.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 113.0,
        defensiveEfficiency: 99.9,
        pace: 73.0,
        strengthOfSchedule: 0.23,
        netRanking: 62
      }
    },
    {
      id: "montana",
      name: "Montana",
      seed: 16,
      region: "West",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/147.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 112.9,
        defensiveEfficiency: 100.0,
        pace: 73.2,
        strengthOfSchedule: 0.22,
        netRanking: 63
      }
    },
    {
      id: "stetson",
      name: "Stetson",
      seed: 16,
      region: "East",
      logo: "https://a.espncdn.com/i/teamlogos/ncaa/500/263.png",
      colors: {
        primary: "#003875",
        secondary: "#FFFFFF"
      },
      stats: {
        offensiveEfficiency: 112.8,
        defensiveEfficiency: 100.1,
        pace: 73.4,
        strengthOfSchedule: 0.21,
        netRanking: 64
      }
    }
  ];

  return teams;
};
