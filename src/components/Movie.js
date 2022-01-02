import React from "react";
//config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";
//components
import Grid from "./grid/GridIndex";
import { Spinner } from "./spiner/Spiner.style";
import BreadCrump from "./BreadCrumb";
import MovieInfoBar from "./MovieInfoBar";
import ActorIndex from "./Actor/ActorIndex";
import MovieInfo from "./MovieInfo/MovieInfo";
//hooks
import { useMovieFetch } from "../hooks/useMovieFetch";
import { useParams } from "react-router-dom";
//images

import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);
  if (error) return <div>Somthing went wrong</div>;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ scrollSnapStop: "always"                                                                    }}>
          <BreadCrump movieTitle={movie.original_title} />
          <MovieInfo movie={movie} />
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />

          <Grid header="Actors">
            {movie === null ? (
              <Spinner />
            ) : (
              movie.actors.map((actor) => (
                <ActorIndex
                  key={actor.credit_id}
                  name={actor.name}
                  character={actor.character}
                  imageUrl={
                    actor.profile_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                      : NoImage
                  }
                />
              ))
            )}
          </Grid>
        </div>
      )}
    </>
  );
};

export default Movie;
