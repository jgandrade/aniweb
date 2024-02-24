import { PopularTrendingResultsType } from "@/types/AnimeTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeCard = ({ ...animeData }: PopularTrendingResultsType) => {
  return (
    <Link href={`/watch/${animeData.id}`}>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={animeData.image}
          alt={animeData.title.english}
          width={200}
          height={300}
        />
        <p>{animeData.title.english}</p>
      </div>
    </Link>
  );
};

export default AnimeCard;
