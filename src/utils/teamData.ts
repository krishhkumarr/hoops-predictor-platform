
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
];
