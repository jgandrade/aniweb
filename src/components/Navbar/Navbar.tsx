"use client";

import { Search } from "lucide-react";
import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (value: string) => {
    setSearchInput(value);
  };

  const handleSearch = (key: string) => {
    if (key === "Enter") {
      router.push(`/search/${searchInput}`);
    }
  };

  const navigateHome = () => {
    router.push(`/`);
  };

  return (
    <div className="w-full flex justify-between items-center h-16 px-5">
      <h1 className="text-primary text-2xl font-bold cursor-pointer" onClick={navigateHome}>
        Aniweb
      </h1>
      <div className="flex justify-between items-center gap-3">
        <div className="relative h-11">
          <input
            className={`outline-none rounded-3xl pl-5 py-2 pr-12 bg-primary-foreground text-primary h-11 font-semibold placeholder:font-normal`}
            value={searchInput}
            onChange={(event) => handleSearchInput(event.target.value)}
            onKeyDown={(event) => handleSearch(event.key)}
            placeholder="Search Anime here"
            spellCheck={false}
          />
          <Search className="absolute right-4 top-[0.6em] text-primary cursor-pointer" />
        </div>
        <ThemeToggler />
        <p className="bg-accent font-bold text-white px-4 py-2 rounded-3xl cursor-pointer w-28 text-center h-11 hover:w-32 transition-all">
          Sign in
        </p>
      </div>
    </div>
  );
};

export default Navbar;
