"use client";
import React from "react";
import useTrending from "@/hooks/useTrending";
import Error from "../Error/Error";
import { AnimeCardsHomepageLoader } from "../Loaders/Loaders";

const Trending = () => {
  const { data, error, isLoading } = useTrending();
  if (isLoading) return <AnimeCardsHomepageLoader />;
  if (error) return <Error />;
  return <div>{JSON.stringify(data?.data.results)}</div>;
};

export default Trending;
