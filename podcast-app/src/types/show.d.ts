// src/types/show.d.ts
export interface Preview {
    id: number;
    title: string;
    image: string;
    genres: number[];
  }
  
  export interface Show extends Preview {
    description: string;
    seasons: Season[];
  }
  
  export interface Season {
    season: number;
    episodes: Episode[];
  }
  
  export interface Episode {
    id: number;
    title: string;
    file: string;
  }
  