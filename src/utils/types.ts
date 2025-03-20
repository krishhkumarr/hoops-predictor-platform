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