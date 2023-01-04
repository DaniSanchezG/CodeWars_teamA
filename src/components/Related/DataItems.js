//CSS
import classes from "./Cards.module.css";
import ButtonNeon from "../UI/Buttons/ButtonNeon";
import { useState } from "react";

function DataItems({ img, character }) {
  const [hover, setHover] = useState(false);
  return (
    <li character={character} img={img}>
      <div
        className={classes["cards-container"]}
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <img src={img} />
        <div className={classes["characters-container"]}>
          <div className={classes.visibility}>
            <ButtonNeon hoverOn={hover} />
          </div>
          <div className={classes["content-info"]}>
            <h3>{character}</h3>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DataItems;
