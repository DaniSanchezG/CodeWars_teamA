//CSS
import classes from "./Cards.module.css";

//Components
import DataItems from "./DataItems";

// import ButtonNeon from "../UI/Buttons/ButtonNeon";

//Datas
// import { datas } from "../../db/datas.json";

//Hooks
import { useState, useEffect } from "react";

function Cards() {
  const [cards, setCards] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchDatas = async () => {
    try {
      setPending(true);
      setPending(null);

      const response = await fetch(
        "https://datacards-ff456-default-rtdb.europe-west1.firebasedatabase.app/datas.json"
      );

      // console.log(response);

      if (response.ok) {
        const data = await response.json();
        setCards(data);
        console.log(data);
      }
    } catch (error) {
      setError({
        message: error.message || "Something went wrong",
      });
    }

    setPending(false);
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <>
      <section className={classes.related}>
        <ul>
          {Object.keys(cards).map((key, index) => {
            // console.log(cards);
            return (
              <DataItems
                key={index}
                id={cards[key].id}
                character={cards[key].character}
                img={cards[key].img}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Cards;
