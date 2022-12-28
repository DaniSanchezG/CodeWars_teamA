import { useState } from "react";

const FetchFilms = (url) => {
  const [films, setNewFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderedFilms, setOrderedFilms] = useState([]);

  const data = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://films-aaf09-default-rtdb.europe-west1.firebasedatabase.app/films.json"
      );
      const films = await response.json();
      if (response.ok) {
        setNewFilm(films);
      }
    } catch (error) {
      setError(error.message);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };
  Object.keys(films).forEach((film) => {
    if(orderedFilms.length < 11){
    orderedFilms.push(films[film]);
    }
  });
  return { orderedFilms, isLoading, error, data};
};

export default FetchFilms;
