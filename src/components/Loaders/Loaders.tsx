import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const AnimeCardsHomepageLoader = () => {
  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {[...Array(20)].map((_, index) => (
        <Skeleton key={`skeleton-loader-${index}`} className="h-[389px] w-[280px] rounded-xl bg-neutral-800" />
      ))}
    </div>
  );
};

export { AnimeCardsHomepageLoader };
