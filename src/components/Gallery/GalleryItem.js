import ButtonNeon from "../UI/Buttons/ButtonNeon";
import classes from "./GalleryItem.module.css";

function GalleryItem({image, title, description, number_images, id}) {
  return (
    <div className={classes["gallery-item"]}>
      <img src={image} alt={title} />
      <div className={classes["item-info"]}>
        <ButtonNeon />
        <h2>{title}</h2>
        <p>{description}</p>
        <small>{number_images} Images</small>
        <span className={classes.skew}></span>
      </div>
    </div>
  );
}

export default GalleryItem;
