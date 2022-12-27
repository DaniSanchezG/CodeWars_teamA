import "./Films.module.css";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";

function Films() {
  const [films, setNewFilm] = useState({});


  const data = async () => {
    try{
    const response = await fetch("https://films-aaf09-default-rtdb.europe-west1.firebasedatabase.app/films.json");
    const films = await response.json();
    if(response.ok){
    setNewFilm(films);
    }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  console.log(films);


    return <div>
      {films && Object.keys(films).map((film) => {
        return <div key={film}>
          <h2>{films[film].title}</h2>
          <p>{films[film].description}</p>
          <img src={films[film].imgFilm} alt={films[film].title} />
        </div>
      })}
    </div>;

}

export default Films;
