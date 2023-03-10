//CSS
import classes from "./Cards.module.css";

//Components
import DataItems from "./DataItems";

//Hooks
import { useState, useEffect } from "react";

const FETCH_DATAS =
  "https://datacards-ff456-default-rtdb.europe-west1.firebasedatabase.app/datas.json";

function Cards() {
  const [cards, setCards] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchDatas = async () => {
    try {
      setPending(true);

      const response = await fetch(FETCH_DATAS);
      // console.log(response);

      if (response.ok) {
        const data = await response.json();
        setCards(data);
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
