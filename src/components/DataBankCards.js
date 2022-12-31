import classes from "./DataBankCards.module.css";
import { useState, useEffect } from "react";

function DataBankCards(props) {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    cardsInfo();
  }, []);

  const cardsInfo = async () => {
    const cardsData = await fetch(
      "https://characters-206d3-default-rtdb.europe-west1.firebasedatabase.app/characters.json"
    );
    const cardInfo = await cardsData.json();
    setCharacters(cardInfo);
  };

  
  return (
    <>
      <ul className={classes["cards-wrapper-ul"]}>
        {Object.keys(characters).map((key, index) => {
          return (
            <li className={classes["card-li"]} key={key} id={key}>
              <img alt={characters[key].character} src={characters[key].img} />
              <div className={classes["half-bottom-card"]}>
                <div className={classes["card-info"]}>
                  <div className={classes["card-decal"]}></div>
                  <span>{characters[key].character}</span>
                </div>
                <div className={classes["border-bottom-container"]}>
                  <span className={classes["border-bottom"]}></span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DataBankCards;
