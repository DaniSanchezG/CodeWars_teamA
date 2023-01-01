import classes from "./DataBankCards.module.css";

function DataBankCards(props) {
  
  return (
    <>
      <ul className={classes["cards-wrapper-ul"]}>
        {Object.keys(props.items).map((key, index) => {
          console.log(props.items);
          return (
            <li className={classes["card-li"]} key={key} id={key}>
              <img alt={props.items[key].character} src={props.items[key].img} />
              <div className={classes["half-bottom-card"]}>
                <div className={classes["card-info"]}>
                  <div className={classes["card-decal"]}></div>
                  <span>{props.items[key].character}</span>
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
