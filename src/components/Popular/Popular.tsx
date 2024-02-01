"use client";
import usePopular from "@/hooks/usePopular";
import React from "react";
import Error from "../Error/Error";
import { AnimeCardsHomepageLoader } from "../Loaders/Loaders";

const Popular = () => {
  const { data, error, isLoading } = usePopular();
  if (isLoading) return <AnimeCardsHomepageLoader />;
  if (error) return <Error />;
  return <div>{JSON.stringify(data?.data.results)}</div>;
};

export default Popular;
