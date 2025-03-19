
export interface Team {
  id: string;
  name: string;
  seed: number;
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

export const teams: Team[] = [
  {
    id: "uconn",
    name: "UConn",
    seed: 1,
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
    id: "gonzaga",
    name: "Gonzaga",
    seed: 5,
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
    id: "houston",
    name: "Houston",
    seed: 1,
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
    id: "purdue",
    name: "Purdue",
    seed: 3,
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
    id: "northcarolina",
    name: "North Carolina",
    seed: 1,
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
    id: "tennessee",
    name: "Tennessee",
    seed: 2,
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
    id: "alabama",
    name: "Alabama",
    seed: 4,
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
    id: "duke",
    name: "Duke",
    seed: 4,
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
];
