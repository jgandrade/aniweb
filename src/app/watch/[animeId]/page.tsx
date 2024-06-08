import Link from "next/link";
import Watch from "../Watch";
import getAnimeInfo from "@/lib/getAnimeInfo";

const WatchPage = async ({ params }: { params: { animeId: string } }) => {
  const animeInfo = await getAnimeInfo(params.animeId);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-4 min-h-screen">
      <div className="flex flex-col items-center w-full md:max-w-4xl">
        <Watch animeInfo={animeInfo} />
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 text-white">
          <div className="text-gray-400 mt-2 md:mt-0">
            {animeInfo.title.english}
          </div>
          <div className="flex gap-3">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-72 mt-4 md:mt-0">
        <h2 className="text-xl font-bold text-white mb-2">Episodes</h2>
        <div className="flex flex-col gap-3 overflow-y-auto h-full max-h-[calc(100vh-4rem)]">
          {animeInfo.episodes.map((episode, index) => {
            return (
              <Link
                href={`?episode=${index + 1}`}
                key={`${index}-episode`}
                className="bg-gray-800 border border-gray-700 rounded-md p-4 hover:bg-gray-700 transition duration-200 text-white"
              >
                <div className="text-sm font-medium">{episode.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
