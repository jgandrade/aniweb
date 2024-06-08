"use client";

import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import useWatch from "@/hooks/useWatch";
import { AnimeInfoType } from "@/types/AnimeTypes";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

const Watch = ({ animeInfo }: { animeInfo: AnimeInfoType }) => {
  const searchParams = useSearchParams();
  const episode = searchParams.get("episode");
  const { data, isLoading } = useWatch(
    animeInfo.episodes[Number(episode) - 1].id
  );

  if (isLoading) {
    return <Loader2 />;
  }

  if (data) {
    return (
      <div className="w-full">
        {!isLoading && (
          <VideoPlayer
            videoUrl={
              data.sources[5]?.url ||
              data.sources[4]?.url ||
              data.sources[3]?.url ||
              data.sources[2]?.url ||
              data.sources[1]?.url ||
              data.sources[0]?.url
            }
          />
        )}
      </div>
    );
  }
};

export default Watch;
