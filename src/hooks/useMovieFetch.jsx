import { useState, useEffect } from "react";
import Api from "../API";
import { isPresistedState } from "../helpers";
export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({ directors: [], actors: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const movie = await Api.fetchMovie(movieId);
        const credits = await Api.fetchCredits(movieId);
        //get director only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors: directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPresistedState(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);

      return;
    }

    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};

export default useMovieFetch;
