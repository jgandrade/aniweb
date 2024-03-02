"use client";

import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import useInfo from "@/hooks/useInfo";
import getWatchInfo from "@/lib/getWatchInfo";
import { AnimeInfoType, WatchInfoType } from "@/types/AnimeTypes";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const WatchPage = () => {
  const { animeId } = useParams();
  const [videoLoading, setVideoLoading] = useState(true);
  const { data, error, isLoading } = useInfo(animeId as string);
  const [watchInfo, setWatchInfo] = useState<WatchInfoType | null>(null);

  const getWatchData = useCallback(
    async (animeId: string) => {
      setVideoLoading(true);
      const watchData = await getWatchInfo(animeId);
      setWatchInfo(watchData);
      setVideoLoading(false);
    },
    [data]
  );

  useEffect(() => {
    if (!isLoading) {
      getWatchData(data?.episodes[0].id as string);
    }
  }, [isLoading, getWatchData]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {!videoLoading && (
        <VideoPlayer videoUrl={watchInfo?.sources[4].url as string} />
      )}
      <div className="flex justify-center items-center gap-3">
        {data?.episodes.map((episode, index) => {
          return (
            <button
              key={`${index}-episode`}
              className="border-red-400"
              onClick={() => getWatchData(episode.id)}
            >
              {episode.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WatchPage;
