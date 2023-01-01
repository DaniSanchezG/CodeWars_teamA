import classes from "./DataBank.module.css";
import DataBankCards from "./DataBankCards";
import { useEffect } from "react";
import useFetchCharacters from "../hooks/useFetchDataBank";
import DualRing from "./UI/Spinners/DualRing";
import DataBankNull from "./DataBankNull";
import DataBankError from "./DataBankError";

function DataBank() {
  const { pending, error, characters, fetchTasksHandler } =
    useFetchCharacters();
  useEffect(() => {
    fetchTasksHandler();
  }, []);

  return (
    <section className={classes["data-bank"]}>
      <div className={classes["title-bank"]}>
        <h4>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</h4>
      </div>
      <form action="search" className={classes["search-container"]}>
        <input
          type="text"
          placeholder="Search Databank"
          id="searchField"
          className={classes["search-field"]}
        />
        <div className={classes["search-bank"]}>
          <span>
            <svg
              className={classes.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </span>
          <span className={classes.search}>SEARCH</span>
        </div>
      </form>
      <div className={classes["cards-container"]}>
        <div className={classes["cards-container-title"]}>
          <h3>Andor </h3>
        </div>
        {pending && <DualRing />}
        {!pending && characters !== null && error === null && (
          <DataBankCards items={characters} />
        )}
        {!pending && characters === null && !error && <DataBankNull />}
        {!pending && characters !== null && error !== null && (
          <DataBankError items={error} />
        )}
        <div className={classes["show-more"]}>
          <a href="#Home" className={classes["show-more-button"]}>
            SHOW MORE
          </a>
        </div>
      </div>
    </section>
  );
}

export default DataBank;
