import classes from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";

function Gallery() {
  return (
    <div className={classes["gallery-container"]}>
      <h2 className={classes["title-gallery"]}>Galleries</h2>
      <span className={classes["title-line"]}>
        <span></span>
      </span>
      <div className={classes.gallery}>
        <GalleryItem />
      </div>
    </div>
  );
}

export default Gallery;
