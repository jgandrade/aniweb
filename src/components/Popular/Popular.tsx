"use client";
import usePopular from "@/hooks/usePopular";
import { Box } from "@mui/material";
import React from "react";
import Error from "../Error/Error";
import { AnimeCardsHomepageLoader } from "../Loaders/Loaders";

const Popular = () => {
  const { data, error, isLoading } = usePopular();
  if (isLoading) return <AnimeCardsHomepageLoader />;
  if (error) return <Error />;
  return <Box>{JSON.stringify(data?.data.results)}</Box>;
};

export default Popular;
