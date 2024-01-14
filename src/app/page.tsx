import getPopularAnime from "@/lib/getPopularAnime";
import getRecentEpisodes from "@/lib/getRecentEpisodes";
import getTrendingAnime from "@/lib/getTrendingAnime";

const Home = async () => {
  const popular = await getPopularAnime();
  const recentEpisodes = await getRecentEpisodes();
  const trending = await getTrendingAnime();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Aniweb
    </main>
  );
};

export default Home;
