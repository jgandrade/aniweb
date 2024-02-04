import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Link from "next/link";

const Home = async () => {
  return (
    <main className="min-h-screen w-full">
      <ThemeToggler />
      <VideoPlayer videoUrl="https://www104.vipanicdn.net/streamhls/862301f3a6c2fd6a02b68b646f7b5fea/ep.1.1703877575.m3u8" />
      <Link href={"/search"}>Go to search</Link>
    </main>
  );
};

export default Home;
