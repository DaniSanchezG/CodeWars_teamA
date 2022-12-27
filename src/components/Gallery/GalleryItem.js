import { useState } from "react";
import ButtonNeon from "../UI/Buttons/ButtonNeon";
import classes from "./GalleryItem.module.css";

function GalleryItem({ image, title, description, number_images, id }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classes["gallery-item"]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} />
      <div className={classes["item-info"]}>
        <ButtonNeon onHover={isHovered} />
        <h2>
          {title} 
          <p>{description}</p>
        </h2>

        <small>{number_images} Images</small>
        <span className={classes.skew}></span>
      </div>
    </div>
  );
}

export default GalleryItem;
