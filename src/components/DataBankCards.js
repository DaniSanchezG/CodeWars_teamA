import classes from "./DataBankCards.module.css";


const DataBankCards = (props) => {
  return (
    <ul className={classes["cards-wrapper-ul"]}>
      {Object.charactersdb.map((character, index) => {
        return (
          <li
            className={classes["card-li"]}
            key={props.character.id}
            id={props.character.id}
          >
            <img alt={character.character} src={character.img} />
            <div className={classes["card-info"]}>
              <div className={classes["card-decal"]}></div>
              <span>{character.character}</span>
            </div>
            <div className={classes["border-bottom-container"]}>
              <span className={classes["border-bottom"]}></span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DataBankCards;
