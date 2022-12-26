import { useEffect, useState } from "react";
import GalleryItem from "../components/Gallery/GalleryItem";
import DualRing from "../components/UI/Spinners/DualRing";
import classes from "./GalleryMain.module.css";

const API_URL =
  "https://codewars-a-default-rtdb.europe-west1.firebasedatabase.app/gallery.json";

const GalleryMain = ({ filterId }) => {
  const [gallery, setGallery] = useState({});
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Did not receive expected data");
        const galleryList = await response.json();
        console.log(galleryList);
        setGallery(galleryList);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setPending(false);
      }
    };

    (async () => fetchGallery())();
  }, []);

  return (
    <div className={classes["gallery-container"]}>
      <h2 className={classes["title-gallery"]}>Galleries</h2>
      <span className={classes["title-line"]}>
        <span></span>
      </span>
      <div className={classes.gallery}>
        {pending ? (
          <DualRing />
        ) : (
          Object.keys(gallery).map((key) => (
            <GalleryItem
              key={key}
              id={key}
              image={gallery[key].image}
              title={gallery[key].title}
              description={gallery[key].description}
              number_images={gallery[key].number_images}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GalleryMain;
