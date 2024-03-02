import AnimeCard from "@/components/AnimeCard/AnimeCard";
import searchAnimeData from "@/lib/searchAnimeData";

const SearchPage = async ({ params }: { params: { searchQuery: string } }) => {
  const searchData = await searchAnimeData(params.searchQuery);

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {searchData.results.map((animeData, index) => {
        return <AnimeCard key={`anime-data-${index}`} {...animeData} />;
      })}
    </div>
  );
};

export default SearchPage;
