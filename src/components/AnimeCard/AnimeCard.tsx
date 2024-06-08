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
      <div className="relative overflow-hidden rounded-lg group bg-neutral-800 hover:bg-gray-700 transition duration-200">
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            src={animeData.image}
            alt={
              animeData.title.english ||
              animeData.title.userPreferred ||
              animeData.title.native ||
              animeData.title.romaji
            }
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          <p className="text-sm font-medium text-white">
            {animeData.title.english ||
              animeData.title.userPreferred ||
              animeData.title.native ||
              animeData.title.romaji}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
