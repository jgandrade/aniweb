import Popular from "@/components/Root/Popular/Popular";
import Trending from "@/components/Root/Trending/Trending";

const Home = async () => {
  return (
    <main className="min-h-screen w-full">
      <h2 className="text-3xl">Popular</h2>
      <Popular />
      <h2 className="text-3xl">Trending</h2>
      <Trending />
    </main>
  );
};

export default Home;
