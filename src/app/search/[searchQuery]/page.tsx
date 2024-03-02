import SearchPageWrapper from "../SearchPageWrapper";

const SearchPage = ({ params }: { params: { searchQuery: string } }) => {
  return <SearchPageWrapper searchQuery={params.searchQuery} />;
};

export default SearchPage;
