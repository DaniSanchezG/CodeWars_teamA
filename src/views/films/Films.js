import classes from "./Films.module.css";
import { useEffect, useState } from "react";
import DualRing from "../../components/UI/DualRing";
import FetchFilms from "../../utils/FetchFilms";
import { Link } from "react-router-dom";

function Films() {
  const { orderedFilms, isLoading, error, data } = FetchFilms();
  const [refresh, setRefresh] = useState(true);

  const fetch = data;

  useEffect(() => {
    fetch();
  }, [refresh]);

  const handleOderByYear = () => {
    const orderedFilmsByYear = orderedFilms.sort((a, b) => {
      return a.order - b.order;
    });
    setRefresh(false);
  };

  const originalOrderFilms = () => {
    orderedFilms.reverse();
    setRefresh(true);
  };

  return (
    <div className={classes["principal-container"]}>
      <div className={classes["advertising-bar"]}>
        <a href="#">ALL OF YOUR CODE WARS FAVORITES NOW STREAMING ON CODEWARS+</a>
      </div>
      <div className={classes["browse-films"]}> Browse Films </div>
      <div className={classes["browse-films-bar"]} /> 
      <div className={classes["main-container"]}>
        <div className={classes["aside-container"]}>
          <div className={classes["aside-text"]} onClick={originalOrderFilms}>
            ALL FILMS ({orderedFilms.length})
          </div>
          <div className={classes["aside-text"]} onClick={handleOderByYear}>
            BY REALEASE YEAR ({orderedFilms.length})
          </div>
        </div>
        <div className={classes["films-container"]} style={isLoading ? {justifyContent: "center"} : {justifyContent: "flex-start"} } >
          {isLoading && !error && orderedFilms !== null ? (
            <DualRing />
          ) : (
            <>
              {Object.keys(orderedFilms).map((film) => (
                <Link
                  key={film}
                  to={`films/${orderedFilms[film].title.replaceAll(" ", "-")}`}
                  className={classes["film-link"]}
                >
                  <div key={film} className={classes.film}>
                    <img src={orderedFilms[film].imgFilm} alt={orderedFilms[film].title} />
                    <div className={classes.bar}></div>
                    <div className={classes["film-title"]}>
                      {orderedFilms[film].title}
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Films;
