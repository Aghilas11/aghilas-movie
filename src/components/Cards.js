import React, { useState } from "react";
import moment from "moment/moment";
const Cards = ({ mouvie }) => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${mouvie.poster_path}`}
        alt={mouvie.title}
      />
      <h2> {mouvie.original_title} </h2>
      <h5>
        Date de sortie : {moment(mouvie.release_date).format("DD/MM/YYYY")}
      </h5>
      <h4>
        {mouvie.vote_average.toFixed(1)} / 10 <span>&#9733;</span>{" "}
      </h4>
      <h5> {mouvie.genre_ids} </h5>
      <p>
        <h3>Synopsis : </h3>
        {showFullSynopsis ? (
          mouvie.overview
        ) : (
          <>
            {mouvie.overview.substring(0, 150)}...
            <button
              className="show-more"
              onClick={() => setShowFullSynopsis(true)}
            >
              Afficher la suite
            </button>
          </>
        )}
      </p>
      <button className="btn">Ajouter aux coup de coeur</button>
    </div>
  );
};

export default Cards;
