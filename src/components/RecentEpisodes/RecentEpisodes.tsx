"use client";
import useRecentEpisodes from "@/hooks/useRecentEpisodes";
import { Box } from "@mui/material";
import React from "react";
import Error from "../Error/Error";
import { AnimeCardsHomepageLoader } from "../Loaders/Loaders";

const RecentEpisodes = () => {
  const { data, error, isLoading } = useRecentEpisodes();
  if (isLoading) return <AnimeCardsHomepageLoader />;
  if (error) return <Error />;
  return <Box>{JSON.stringify(data?.data.results)}</Box>;
};

export default RecentEpisodes;
