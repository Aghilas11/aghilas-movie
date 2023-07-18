import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Movies = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => setData(res.data.results));
  }, [search]);
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'1 film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <input
            type="submit"
            id="goodToBad"
            value="Top"
            onClick={() => setSortGoodBad("goodToBad")}
          />
          <input
            type="submit"
            id="badToGood"
            value="Flop"
            onClick={() => setSortGoodBad("badToGood")}
          />
        </div>
      </div>
      <div className="card-container">
        {data
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((mouvie, index) => (
            <Cards key={index} mouvie={mouvie} />
          ))}
      </div>
    </div>
  );
};

export default Movies;
