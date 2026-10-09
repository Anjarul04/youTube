import React, { useEffect, useState } from "react";
import notification from "../assets/notification.png";
import user from "../assets/user.png";
import search from "../assets/search.png";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constent";
import { setSearchChache } from "../utils/chacheSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchChache = useSelector((store) => store.chache.searchChache);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setShowResults(false);
    navigate("/result?search_query=" + encodeURIComponent(searchQuery));
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    if (searchChache[searchQuery]) {
      setSearchResults(searchChache[searchQuery]);
      return;
    }

    const timer = setTimeout(() => {
      searchQueryResult();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchChache]);

  const searchQueryResult = async () => {
    try {
      const data = await fetch(
        YOUTUBE_SEARCH_API + encodeURIComponent(searchQuery),
      );

      if (!data.ok) return;

      const json = await data.json();
      const results = json[1] || [];

      setSearchResults(results);

      dispatch(
        setSearchChache({
          [searchQuery]: results,
        }),
      );
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handlePredefineSearch = (result) => {
    setSearchQuery(result);
    setShowResults(false);

    navigate("/result?search_query=" + encodeURIComponent(result));
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between gap-2 bg-white px-3 shadow-md sm:px-5">
      {/* Logo and Menu */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        <button
          type="button"
          onClick={handleToggleMenu}
          aria-label="Toggle sidebar"
          className="cursor-pointer text-2xl sm:text-3xl"
        >
          ☰
        </button>

        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube logo"
            className="w-20 cursor-pointer sm:w-28 md:w-32"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative flex min-w-0 flex-1 justify-center px-1 sm:px-4 md:max-w-2xl">
        <div className="flex w-full min-w-0">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            type="text"
            placeholder="Search"
            aria-label="Search videos"
            className="w-full min-w-0 rounded-l-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 sm:px-5 sm:text-base"
          />

          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
            className="flex shrink-0 items-center justify-center rounded-r-full border border-l-0 border-gray-300 bg-gray-100 px-3 hover:bg-gray-200 sm:px-5"
          >
            <img src={search} alt="" className="h-5 w-5" />
            <span className="hidden md:ml-2 md:inline">Search</span>
          </button>
        </div>

        {/* Search Suggestions */}
        {searchResults.length > 0 && showResults && (
          <div className="absolute left-1/2 top-full mt-1 max-h-80 w-[calc(100%-8px)] -translate-x-1/2 overflow-y-auto rounded-xl border border-gray-200 bg-white py-2 shadow-lg sm:w-[calc(100%-32px)]">
            <ul>
              {searchResults.map((result, index) => (
                <li key={`${result}-${index}`}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handlePredefineSearch(result)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-gray-100 sm:text-base"
                  >
                    <img className="h-4 w-4 shrink-0" src={search} alt="" />
                    <span className="truncate">{result}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Notification and Profile */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5 md:gap-6">
        <button
          type="button"
          aria-label="Notifications"
          className="cursor-pointer"
        >
          <img src={notification} alt="" className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        <button
          type="button"
          aria-label="User profile"
          className="cursor-pointer"
        >
          <img src={user} alt="" className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>
      </div>
    </header>
  );
};

export default Header;
