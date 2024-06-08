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
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {data?.results.map((animeData) => (
        <AnimeCard key={animeData.id} {...animeData} />
      ))}
    </div>
  );
};

export default Popular;
