import classes from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";

function Gallery(props) {
  return (
    <div className={classes["gallery-container"]}>
      <h2 className={classes["title-gallery"]}>Galleries</h2>
      <span className={classes["title-line"]}>
        <span></span>
      </span>
      <div className={classes.gallery}>
        {Object.keys(props.items).map((key, index) => (
          <GalleryItem
            key={index}
            id={props.items[key].id}
            title={props.items[key].title}
            description={props.items[key].description}
            image={props.items[key].image}
            number_image={props.items[key].number_image}
          />
        ))}
        {/* <GalleryItem />
        <GalleryItem /> */}
      </div>
    </div>
  );
}

export default Gallery;
