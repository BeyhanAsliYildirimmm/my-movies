import React from "react";
import { Link } from "react-router-dom";
import EditMovie from "./EditMovie";
const MovieList = (props) => {

 //açıklamayı karakter olarak sınırlandırma işlemi

 const truncateOverview = (string, maxLength) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)} ...`;
};

 
    return (

      <div className="row">
        {props.movies.map((movie,i) => (
          <div className="col-lg-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img src={movie.imageURL} className="card-img-top" alt="Arrow Movie"></img>
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text"> {truncateOverview(movie.overview,100)}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" onClick={(event)=> props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                  <div className="col-2">
                        <Link       
                                to={`/edit/${movie.id}`}                       
                                type="button" 
                                className="btn btn-md btn-outline-primary"
                                style={{ marginLeft:'-110px',width:'80px' }}>Edit
                        </Link>
                    </div>
                  <h2><span className=" badge-info ">{movie.rating}</span></h2>

                </div>
              </div>

            </div>
          </div>
        ))}


      </div>

    )
  }
  

export default MovieList;