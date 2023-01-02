import classes from "./Films.module.css";
import { useEffect, useState } from "react";
import DualRing from "../../components/UI/Spinners/DualRing";
import FetchFilms from "../../utils/FetchFilms";
import { Link } from "react-router-dom";
import HeaderSpreaderBar from "../../components/films/HeaderSpreaderBar";
import ButtonNeon from "../../components/UI/Buttons/ButtonNeonGallery";

function Films() {
  const { orderedFilms, isLoading, error, data } = FetchFilms();
  const [refresh, setRefresh] = useState(true);
  const [assideActive, setAsideActive] = useState(false);
  const [isHovered, setIsHovered] = useState([false,false,false,false,false,false,false,false,false,false,false]);
  const [showListState, setShowListState] = useState(false);

  const fetch = data;

  useEffect(() => {
    fetch();
  }, [refresh]);

  const handleOderByYear = () => {
    const orderedFilmsByYear = orderedFilms.sort((a, b) => {
      return a.order - b.order;
    });
    setRefresh(false);
    setAsideActive(true);
  };

  const originalOrderFilms = () => {
    orderedFilms.reverse();
    setRefresh(true);
    setAsideActive(false);
  };

  const showList = () => {
    setShowListState(!showListState);
  };

  return (
    <div className={classes["principal-container"]}>
      <div className={classes["advertising-bar"]}>
        <a href="#">ALL OF YOUR CODE WARS FAVORITES NOW STREAMING ON CODEWARS+</a>
      </div>
      <div className={classes["browse-films"]}> Browse Films </div>
      <HeaderSpreaderBar />
      <div className={classes["main-container"]}>
        <ul className={classes["aside-container"]} onClick={showList}>
          <li className={`${classes["aside-text"]} ${!assideActive? classes.active : null }`} onClick={originalOrderFilms}>
            ALL FILMS ({orderedFilms.length})
          </li>
          <li className={`${classes["aside-text"]} ${assideActive? classes.active : null }`} onClick={handleOderByYear}>
            BY REALEASE YEAR ({orderedFilms.length})
          </li>
        </ul>
        <div className={classes["films-container"]} style={isLoading ? {justifyContent: "center"} : {justifyContent: "flex-start"} } >
          {isLoading && !error && orderedFilms !== null ? (
            <DualRing />
          ) : (
            <>
              {Object.keys(orderedFilms).map((film) => (
                <Link
                  key={film}
                  id={film}
                  to={`/films/${orderedFilms[film].movieId}`}
                  className={classes["film-link"]}
                  onMouseEnter={() => {
                                        setIsHovered({[film]: true})
                                      } }
                  onMouseLeave={() => {
                                        setIsHovered({[film]: false})
                                      } }
                >
                  <div key={film} className={classes.film}>
                    <img src={orderedFilms[film].imgFilm} alt={orderedFilms[film].title} />
                    {<ButtonNeon onHover={() =>{
                      console.log(isHovered[film]);
                      return isHovered[film]
                    }}/>}
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