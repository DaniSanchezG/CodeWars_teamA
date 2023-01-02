import classes from "./Interactive.module.css";


function Interactive() {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>The Latest | Star Wars Games + Apps</h2>
      <div className={classes.line}></div>
      <div className={classes["cards-container"]}>
        <div className={classes["wrapper-img1"]}>
          <img className={classes.img} src={require("../../assets/1.jpeg")} />
          <div className={classes.neon}> <span></span><span></span></div>
          <h3 className={classes["text-1"]}>
            Star Wars: The Clone Wars Invades the Tabletop
          </h3>
          <div className={classes.trapecio1}></div>
        </div>
        <ul className={classes.lateral}>
          <div className={classes["wrapper-img2"]}>
        
            <img
              className={classes.img2}
              src={require("../../assets/2.webp")}
            />
             <div className={classes.neon}> <span></span><span></span></div>
            <h3 className={classes["text-2"]}>
              Star Wars Jedi: Survivor: Cameron Monaghan on Cal Kestis' Next
              Adventure
            </h3>
          </div>
          <div className={classes.trapecio2}></div>
          <div className={classes["wrapper-img3"]}>
            
            <img
              className={classes.img2}
              src={require("../../assets/3.webp")}
            />
             <div className={classes.neon}> <span></span><span></span></div>
            <h3 className={classes["text-2"]}>
              Cal Kestis Returns in Star Wars Jedi: Battle Scars - Cover Reveal
            </h3>
          </div>
          <div className={classes.trapecio3}></div>

          <div className={classes["wrapper-img4"]}>
          
            <img
              className={classes.img2}
              src={require("../../assets/4.webp")}
            />
             <div className={classes.neon}> <span></span><span></span></div>
            <h3 className={classes["text-2"]}>
              Quiz: Which Star Wars Video Game Should You Play Right Now?
            </h3>
          </div>
          <div className={classes.trapecio4}></div>
        </ul>
      </div>
    </div>
  );
}

export default Interactive;
