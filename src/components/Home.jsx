// import react, { useState, useEffect } from "react";

//Api
// import Api from "../API";
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config.js";

//components
import HeroImage from "./heroeImage/HeroImageIndex";
import Grid from "./grid/GridIndex";
import Tumb from "./Tump/TumbIndex";
import Spinner from "./spiner/SpinerIndex";
import SearchBar from "./searchBar/SearchBarIndex";
import ButtonIndex from "./button/ButtonIndex";
//image
import noImage from "../images/no_image.jpg";
//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
  const {
    state,
    loading,
    error,
    setSearchTearm,
    searchTerm,
    setIsLoadingMore,
  } = useHomeFetch();

  console.log(state);

  if (error) {
    <div>Something error</div>;
  }
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTearm={setSearchTearm} />
      <Grid header={searchTerm ? "Search results" : "Populars Movies"}>
        {state.results.map((movie) => (
          <Tumb
            key={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : noImage
            }
            cliakable
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <ButtonIndex text="Load More" callBack={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
