//CSS
// import classes from "./Related/Cards.module.css"

//Datos
import  {datas}  from "../../db/datas";

//Components
import ButtonNeon from "../UI/Buttons/ButtonNeon";

function Cards(props) {
// console.log(props);
  return (
    <>
      <div>
        <img src={props.datas[0].img.path} alt={props.datas[0].img.text} />
        <div>
          <ButtonNeon />
          <h3>{props.datas.character}</h3>
        </div>
      </div>
    </>
  );
}

export default Cards;
