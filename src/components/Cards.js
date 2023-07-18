import React, { useState } from "react";
import moment from "moment/moment";
const Cards = ({ mouvie }) => {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < mouvie.genre_ids.length; i++) {
      switch (mouvie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10482:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10751:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;

        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}> {genre} </li>);
  };

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
        {mouvie.vote_average.toFixed(1)} / 10 <span>⭐</span>{" "}
      </h4>
      <ul>{mouvie.genre_ids ? genreFinder() : null}</ul>
      {mouvie.overview ? <h3>Synopsis</h3> : ""}
      <p> {mouvie.overview} </p>
      <button className="btn">Ajouter aux coup de coeur</button>
    </div>
  );
};

export default Cards;
