import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

function heroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleOnChangeInput(e) {
    setQuery(e.target.value);
  }

  function handleKeyUp(e) {
    //console.log(e);
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  const { data, loading } = useFetch("movie/upcoming");
  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subtitle">
            Millions of Movies and TV Shows to look for......
          </span>
          <div className="userInput">
            <input
              type="text"
              placeholder="Search for series or movies"
              onKeyUp={handleKeyUp}
              onChange={handleOnChangeInput}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default heroBanner;
