import { useEffect, useState } from "react";
import Api from "../API";
import { isPresistedState } from "../helpers";
export const useHomeFetch = () => {
  const initialValues = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  const [searchTerm, setSearchTearm] = useState("");
  const [state, setState] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await Api.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  //initial render and search
  useEffect(() => {
    if (!searchTerm) {
      console.log("grabin from session");
      const sessionState = isPresistedState("homeState");

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    console.log("grabin from api");
    setState(initialValues);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);
  //load more
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, searchTerm]);

  //write to session storage

  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return {
    state,
    loading,
    error,
    setSearchTearm,
    searchTerm,
    setIsLoadingMore,
  };
};
