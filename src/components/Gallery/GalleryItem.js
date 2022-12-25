import ButtonNeon from "../UI/Buttons/ButtonNeon";
import classes from "./GalleryItem.module.css";

function GalleryItem(props) {
  return (
    <div className={classes["gallery-item"]}>
      {/* {images.map((image) => (
          <div className="gallery-item">
          <img src={image.src} alt={image.title} />
          <p>{image.title}</p>
          </div>
        ))} */}
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/image_cb1fc1a1.jpeg?region=0%2C0%2C1560%2C878"
        alt="Foto prueba"
      />
      <div className={classes["item-info"]}>
        <ButtonNeon />
        <h2>Story Gallery</h2>
        <p>Behind the scenes</p>
        <small>34 Images</small>
      </div>
    </div>
  );
}

export default GalleryItem;
