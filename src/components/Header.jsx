import React, { useEffect, useState } from "react";
import notification from "../assets/notification.png";
import user from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constent";
import { setSearchChache } from "../utils/chacheSlice";
import search from "../assets/search.png";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const searchChache = useSelector((store) => store.chache.searchChache);

  const handleSearch = () => {
    if (!searchQuery ) return;
    navigate("result?search_query=" + searchQuery);
  };

  useEffect(() => {
    if (searchChache[searchQuery]) {
      setSearchResults(searchChache[searchQuery]);
      return;
    } else {
      const timmer = setTimeout(() => searchQueryResult(), 200);
      return () => clearTimeout(timmer);
    }
  }, [searchQuery]);

  const searchQueryResult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchResults(json[1]);
    dispatch(setSearchChache({ [searchQuery]: json[1] }));
  };

  const handlePredefineSearch = (result)=>{
    setSearchQuery(result);
    navigate("result?search_query=" + searchQuery);
  }

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex fixed justify-between items-center p-4 bg-white shadow-md w-full">
      <div className="flex items-center space-x-4 w-1/5">
        <p
          onClick={() => handleToggleMenu()}
          className="text-3xl cursor-pointer"
        >
          ☰
        </p>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube logo"
            className="w-32 cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex items-center w-12/12 justify-center">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          type="text"
          className="border-2 border-gray-300 rounded-l-full py-2 px-4 w-7/12  focus:outline-none focus:border-black"
        />

        <button
          onClick={handleSearch}
          className="text-bold bg-gray-200 border-2 border-gray-300 rounded-r-full py-2 px-4 hover:bg-gray-300 cursor-pointer"
        >
          Search
        </button>

        {searchResults.length > 0 && showResults && (
          <div className="absolute top-17 bg-white border-2 border-gray-300 rounded-lg w-5/12 max-h-96 overflow-y-auto scrollbar-none  z-10 ">
            <ul>
              {searchResults.map((result, index) => (
                <div
                  onClick={()=>handlePredefineSearch(result)}
                  className="flex items-center space-x-2 py-3 px-5 hover:bg-gray-100 cursor-pointer"
                  key={index}
                >
                  <img className="w-5 h-5 mx-2" src={search} alt="search" />
                  <li className="">
                    {result}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-6 mr-3 w-1/4 justify-end">
        <img
          src={notification}
          alt="notification"
          className="w-8 cursor-pointer"
        />
        <img src={user} alt="user" className="w-8 cursor-pointer " />
      </div>
    </div>
  );
};

export default Header;
