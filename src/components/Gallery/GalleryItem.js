import ButtonNeon from "../UI/Buttons/ButtonNeon";
import classes from "./GalleryItem.module.css";

function GalleryItem(props) {
    return (
      <div className={classes["gallery-item"]}>
        <img
          src={props.image}
          alt={props.title}
        />
        <div className={classes["item-info"]}>
          <ButtonNeon />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <small>{props.number_images} Images</small>
          <span className={classes.skew}></span>
        </div>
      </div>
    );
  }
  
  export default GalleryItem;