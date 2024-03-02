"use client";
import useSearch from "@/hooks/useSearch";

const Search = async ({ searchQuery }: { searchQuery: string }) => {
  const { data, isLoading, error } = useSearch(searchQuery);
  return <div>{JSON.stringify(data)}</div>;
};

export default Search;
