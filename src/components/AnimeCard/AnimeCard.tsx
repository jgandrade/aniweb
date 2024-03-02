import {
  PopularTrendingResultsType,
  SearchResultType,
} from "@/types/AnimeTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeCard = ({
  ...animeData
}: PopularTrendingResultsType | SearchResultType) => {
  return (
    <Link href={`/watch/${animeData.id}?episode=1`}>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={animeData.image}
          alt={
            animeData.title.english ||
            animeData.title.userPreferred ||
            animeData.title.native ||
            animeData.title.romaji
          }
          width={200}
          height={300}
        />
        <p>
          {animeData.title.english ||
            animeData.title.userPreferred ||
            animeData.title.native ||
            animeData.title.romaji}
        </p>
      </div>
    </Link>
  );
};

export default AnimeCard;
