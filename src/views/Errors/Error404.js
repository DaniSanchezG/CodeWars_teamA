import classes from "./Error404.module.css";

function Error404() {
  return (
    <>
      <div className={classes["title-container"]}>
        <h2>
          <span className={classes["mobile-text"]}>
            STREAM CODE WARS ON CODE+
          </span>
          <span className={classes["non-mobile-text"]}>
            ALL OF YOUR CODE WARS FAVORITES NOW STREAMING ON CODE+
          </span>
        </h2>
      </div>

      <section className={classes.back}>
        <img
          tabIndex="0"
          src="https://lumiere-a.akamaihd.net/v1/images/screen_shot_2022-10-10_at_1_4099fde7.png"
        />
        <div className={classes.overlay}>
          <img
            className={classes.image}
            alt="Error404"
            src="https://lumiere-a.akamaihd.net/v1/images/e404-4ced2cd1702d_bb1ae7b9.jpeg"
          ></img>
        </div>
        <div className={classes.text}>
          <h2>This page is not fully armed and operational.</h2>
          <h3>Try something else?</h3>
        </div>
      </section>
    </>
  );
}

export default Error404;
