import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Info2() {
  const [field, setField] = useState("");
  const [location, setLocation] = useState("");
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://jsearch.p.rapidapi.com/search",
        params: {
          query: `${field} in ${location}`,
          page: "1",
          num_pages: "1",
        },
        headers: {
          'x-rapidapi-key': 'a02b8d1ae2msh7a302518c8d67e2p1ca0b1jsn022aafb891af',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };

      const res = await axios.request(options);
      setResponse(res);
      console.log(res?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleClick(); // optional: add dependency if you only want it once
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-[#0f0f0f] via-black to-[#0a0a0a] text-white py-20 px-4">
      {/* Search Header Section */}
      <div className="w-full max-w-4xl backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg mb-16">
        <h1 className="text-4xl sm:text-5xl font-[Just] text-center text-white mb-12">
          Dream Big. Work Smart. Get Hired!
        </h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white/10 border border-white/20 rounded-md overflow-hidden shadow-md w-full">
          {/* Left Input */}
          <div className="flex items-center flex-1">
            <span className="px-3 text-white">
              <SearchOutlinedIcon />
            </span>
            <input
              type="text"
              placeholder="Job Title, Company Name, etc."
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-400 py-3 px-2 focus:outline-none"
            />
          </div>

          {/* Divider */}
          <div className="text-white px-3">|</div>

          {/* Right Input */}
          <div className="flex items-center flex-1">
            <span className="px-3 text-white">
              <LocationOnOutlinedIcon />
            </span>
            <input
              type="text"
              placeholder="City or Country"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-400 py-3 px-2 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleClick}
            className="bg-[#FFDE4D] hover:bg-[#ffcc00] text-black font-semibold px-4 py-3 transition-all duration-200"
          >
            Search
          </button>
        </div>
      </div>

      {/* Card Grid Section */}
      <Cards Company={response?.data?.data} />
    </div>
  );
}
