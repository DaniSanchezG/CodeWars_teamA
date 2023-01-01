import { useState } from "react";

const useFetchCharacters = () => {
  const [characters, setCharacters] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchTasksHandler = async () => {
    try {
      setPending(true);
      setError(null);

      const response = await fetch(
        "https://characters-206d3-default-rtdb.europe-west1.firebasedatabase.app/characters.json"
      );

      if (response.ok) {
        const data = await response.json();
        setCharacters(data);
      }
    } catch (error) {
      setError({
        message: error.message || "Something went wrong",
      });
    }
    setPending(false);
  };

  return {
    pending,
    error,
    characters,
    fetchTasksHandler,
  };
};

export default useFetchCharacters;
