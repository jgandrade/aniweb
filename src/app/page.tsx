import Popular from "@/components/Root/Popular/Popular";
import Trending from "@/components/Root/Trending/Trending";

const Home = async () => {
  return (
    <main className="min-h-screen p-4 w-full">
      <h2 className="text-2xl font-bold text-primary mb-4">Popular</h2>
      <Popular />
      <h2 className="text-2xl font-bold text-primary mb-4 mt-10">Trending</h2>
      <Trending />
    </main>
  );
};

export default Home;
