import classes from "./MovieSelect.module.css";
import { useState } from "react";

function MovieSelect() {
  // set dropdown menu opened or closed by clicking on all movies
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <div className={classes["title-container"]}>
        <h2>
          <span className={classes["mobile-text"]}>
            STREAM CODE WARS ON CODE+
          </span>
          <span className={classes["non-mobile-text"]}>
            ALL OF YOUR CODE WARS FAVORITES NOW STREAMING ON CODE+
          </span>
        </h2>
      </div>
      <div className={classes["select-container"]} onClick={handleOpen}>
        <h3 className={classes["select-container-title"]}>ALL FILMS
        <span className={
            isOpened
              ? classes["arrow-img-rotate"]
              : classes["arrow-img"]
          }><img src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Nav_Mobile_Arrow_Down_White-248b16ea1997.svg"/></span>
        </h3>
        
        <div
          className={
            isOpened
              ? classes["link-list-dropdown"]
              : classes["link-list-dropdown-closed"]
          }
        >
          <ul className={classes["link-list"]}>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: The Rise of Skywalker (Episode IX)</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Solo: A Star Wars Story</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: The Last Jedi</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Rogue One: A Star Wars Story</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: The Force Awakens (Episode VII)</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: Return of the Jedi (Episode VI)</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: The Empire Strikes Back (Episode V)</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: A New Hope (Episode IV)</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: Revenge of the Sith (Episode III)</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: Attack of the Clones (Episode II)</a>
            </li>
            <li className={classes["link-list-item"]}>
              <a className={classes.link} href="#">Star Wars: The Phantom Menace (Episode I)</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieSelect;
