import Link from "next/link";
import Watch from "../Watch";
import getAnimeInfo from "@/lib/getAnimeInfo";

const WatchPage = async ({ params }: { params: { animeId: string } }) => {
  const animeInfo = await getAnimeInfo(params.animeId);

  return (
    <div className="flex flex-col justify-center items-center">
      <Watch animeInfo={animeInfo} />
      <div className="flex justify-center items-center gap-3">
        {animeInfo.episodes.map((episode, index) => {
          return (
            <Link
              href={`?episode=${index + 1}`}
              key={`${index}-episode`}
              className="border-red-400"
            >
              {episode.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WatchPage;
