import React from "react";
import './card.css';
export default function CardMovie({movie}){
    return(
        <div className="card">
            <img className="card-img-top img" src={movie.Poster!=="N/A"? movie.Poster:""} alt={movie.Poster} />

        <div className="card-body bg-dark ">
            <span className="card-text text-light type">{movie.Type}</span>
            <span className="card-text text-light">{movie.Year}</span>
            <h6 className="title text-light card-title">
                {movie.Title}
            </h6>
        </div>
    </div>
    )
}