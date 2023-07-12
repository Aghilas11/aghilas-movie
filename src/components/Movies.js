import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR"
      )
      .then((res) => setData(res.data.results));
  });
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input type="text" placeholder="Entrez le titre d'1 film" />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <input type="submit" id="goodToBad" value="Top" />
          <input type="submit" id="badToGood" value="Flop" />
        </div>
      </div>
      <div className="card-container">
        {data.map((mouvie, index) => (
          <Cards key={index} mouvie={mouvie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
