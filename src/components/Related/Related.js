import classes from "./Related.module.css";
import { useState } from "react";
import imgRelated from "../../assets/imgRelated";

function Related() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Cinta Kaz",
      img:"https://www.starwars.com/databank/cinta-kaz"
    },
    {
      id: 2,
      name: "Lt. Gorn",
      img:"https://www.starwars.com/databank/lt-gorn"
    },
    {
      id: 3,
      name: "Arvel Skeen",
      img:"https://www.starwars.com/databank/arvel-skeen"
    },
    {
      id: 4,
      name: "Karis Nemik",
      img:"https://www.starwars.com/databank/karis-nemik"
    },
    {
      id: 5,
      name: "Cassian Andor",
      img:"https://www.starwars.com/databank/cassian-andor"
    },
    {
      id: 6,
      name: "Luthen Rael",
      img:"https://www.starwars.com/databank/luthen-rael"
    },
  ]);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Related</h2>
        </div>
        <div>
          <img src={imgRelated.img1}/>
          <div className={classes["cards-container"]}>
            {/*Aqui componente*/}
            <h3></h3>
          </div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Related;
