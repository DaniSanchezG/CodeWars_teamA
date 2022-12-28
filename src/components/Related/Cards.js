//CSS
import classes from "./Cards.module.css";

//Components
import ButtonNeon from "../UI/Buttons/ButtonNeon";

function Cards(props) {
  // console.log(props);
  return (
    <>
      <section className={classes.related}>
        <div className={classes["cards-container"]}>
          <img src={props.datas[0].img.path} alt={props.datas[0].img.text} />
          <div className={classes["characters-container"]}>
            <ButtonNeon />
            <div className={classes["content-info"]}>
              <h3>{props.datas[0].character}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
