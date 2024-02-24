export type SearchDataType = {
  currentPage: number;
  hasNextPage: boolean;
  results: SearchResultType[];
};

type SearchResultType = {
  id: string;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  status: string;
  image: string;
  imageHash: string;
  cover: any;
  coverHash: string;
  popularity: number;
  description: string;
  rating: number;
  genres: Array<string>;
  color: string;
  totalEpisodes: number;
  currentEpisodeCount: number;
  type: string;
  releaseDate: number;
};

type PopularTrendingResultsType = {
  id: string;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  image: string;
  imageHash: string;
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
    thumbnailHash: string;
  };
  description: string;
  status: string;
  cover: string;
  coverHash: string;
  rating: number;
  releaseDate: number;
  color: string;
  genres: Array<string>;
  totalEpisodes: number;
  duration: number;
  type: string;
};

export type PopularTrendingType = {
  currentPage: number;
  hasNextPage: boolean;
  results: PopularTrendingResultsType[];
};

type RecentEpisodesResultType = {
  id: string;
  malId: string;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  image: string;
  imageHash: string;
  episodeId: string;
  episodeTitle: string;
  episodeNumber: number;
  type: string;
};

export type RecentEpisodesType = {
  currentPage: number;
  hasNextPage: boolean;
  results: RecentEpisodesResultType[];
};
export type AnimeInfoType = {
  id: string;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  malId: number;
  synonyms: Array<string>;
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
    thumbnailHash: string;
  };
  image: string;
  imageHash: string;
  popularity: number;
  color: string;
  cover: string;
  coverHash: string;
  description: string;
  status: string;
  releaseDate: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  totalEpisodes: number;
  currentEpisode: number;
  rating: number;
  duration: number;
  genres: Array<string>;
  season: string;
  studios: Array<string>;
  subOrDub: string;
  type: string;
  recommendations: Array<{
    id: number;
    malId: number;
    title: {
      romaji: string;
      english?: string;
      native: string;
      userPreferred: string;
    };
    status: string;
    episodes: number;
    image: string;
    imageHash: string;
    cover: string;
    coverHash: string;
    rating: number;
    type: string;
  }>;
  characters: Array<{
    id: number;
    role: string;
    name: {
      first: string;
      last?: string;
      full: string;
      native: string;
      userPreferred: string;
    };
    image: string;
    imageHash: string;
    voiceActors: Array<{
      id: number;
      language: string;
      name: {
        first: string;
        last: string;
        full: string;
        native?: string;
        userPreferred: string;
      };
      image: string;
      imageHash: string;
    }>;
  }>;
  relations: Array<{
    id: number;
    relationType: string;
    malId: number;
    title: {
      romaji: string;
      english: string;
      native: string;
      userPreferred: string;
    };
    status: string;
    episodes?: number;
    image: string;
    imageHash: string;
    color: string;
    type: string;
    cover: string;
    coverHash: string;
    rating: number;
  }>;
  mappings: Array<{
    id: string;
    providerId: string;
    similarity: number;
    providerType: string;
  }>;
  artwork: Array<{
    img: string;
    type: string;
    providerId: string;
  }>;
  episodes: Array<{
    id: string;
    title: string;
    description: any;
    number: number;
    image: string;
    imageHash: string;
    airDate: any;
  }>;
};

export type WatchInfoType = {
  headers: {
    Referer: string;
  };
  sources: Array<{
    url: string;
    isM3U8: boolean;
    quality: string;
  }>;
  download: string;
};
