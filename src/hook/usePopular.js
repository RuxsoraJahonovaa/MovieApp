import { useEffect, useState } from "react";
import { Movie } from "../services/serviceApi";

export const usePopular = () => {
  const [popularState, setPopularState] = useState({
    data: null,
    error: null,
    isLoading: true,
  });
  useEffect(() => {
    const handleGetPopularMovie = async () => {
      const { response, error } = await new Movie().getPopular();
      console.log(response);
      if (response) {
        setPopularState({
          data: response,
          error: null,
          isLoading: false,
        });
      }
      if (error) {
        setPopularState({
          data: response,
          error,
          isLoading: false,
        });
      }
    };

    handleGetPopularMovie();
  }, []);

  const { data, error, isLoading } = popularState;
  return { data, error, isLoading };
};
