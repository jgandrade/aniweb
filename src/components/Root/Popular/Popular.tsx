"use client";
import usePopular from "@/hooks/usePopular";
import React from "react";
import Error from "@/components/Error/Error";
import { AnimeCardsHomepageLoader } from "@/components/Loaders/Loaders";
import AnimeCard from "@/components/AnimeCard/AnimeCard";

const Popular = () => {
  const { data, error, isLoading } = usePopular();
  if (isLoading) return <AnimeCardsHomepageLoader />;
  if (error) return <Error />;

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center">
      {data?.results.map((animeData) => {
        return <AnimeCard {...animeData} />;
      })}
    </div>
  );
};

export default Popular;
