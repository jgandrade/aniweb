import AnimeCard from "@/components/AnimeCard/AnimeCard";
import searchAnimeData from "@/lib/searchAnimeData";

const SearchPage = async ({ params }: { params: { searchQuery: string } }) => {
  const searchData = await searchAnimeData(params.searchQuery);

  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 p-4">
      {searchData.results.map((animeData, index) => {
        return <AnimeCard key={`anime-data-${index}`} {...animeData} />;
      })}
    </div>
  );
};

export default SearchPage;
