import { WatchInfoType } from "@/types/AnimeTypes";
import fetchApi from "./fetchApi";

const getWatchInfo = async (episodeId: string) => {
  const response = await fetchApi(`/meta/anilist/watch/${episodeId}`, "get");
  return response as WatchInfoType;
};

export default getWatchInfo;
