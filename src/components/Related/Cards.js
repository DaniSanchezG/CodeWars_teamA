//CSS
import classes from "./Cards.module.css";

//Components
import ButtonNeon from "../UI/Buttons/ButtonNeon";

//Datas
import { datas } from "../../db/datas";

function Cards(props) {
  // console.log(props);
  return (
    <>
        <section className={classes.related}>
          <ul>
      {datas.map((data) => {
        return (
            <li key={data.id} character={data.character} img={data.img}>
                <div className={classes["cards-container"]}>
                  <img
                    src={data.img.path}
                    alt={data.img.text}
                  />
                  <div className={classes["characters-container"]}>
                    <ButtonNeon />
                    <div className={classes["content-info"]}>
                      <h3>{data.character}</h3>
                    </div>
                  </div>
                </div>
            </li>
        );
      })}
          </ul>
      </section>
    </>
  );
}

export default Cards;
