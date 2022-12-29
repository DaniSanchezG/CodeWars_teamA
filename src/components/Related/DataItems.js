import classes from "./Cards.module.css";

function DataItems(props) {
  return (
    <li character={props.character} img={props.img}>
      <div className={classes["cards-container"]}>
        <img src={props.img} />
        <div className={classes["characters-container"]}>
          {/* <ButtonNeon /> */}
          <div className={classes["content-info"]}>
            <h3>{props.character}</h3>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DataItems;