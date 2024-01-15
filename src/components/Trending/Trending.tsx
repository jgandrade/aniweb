"use client";
import React from "react";
import useTrending from "@/hooks/useTrending";
import { Box } from "@mui/material";
import Error from "../Error/Error";
import { AnimeCardsHomepageLoader } from "../Loaders/Loaders";

const Trending = () => {
  const { data, error, isLoading } = useTrending();
  if (isLoading) return <AnimeCardsHomepageLoader />;
  if (error) return <Error />;
  return <Box>{JSON.stringify(data?.data.results)}</Box>;
};

export default Trending;
