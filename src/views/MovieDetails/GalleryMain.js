import { useEffect, useState } from "react";
import GalleryItem from "../../components/Gallery/GalleryItem";
import DualRing from "../../components/UI/Spinners/DualRing";
import classes from "./GalleryMain.module.css";

const URL =
  "https://codewars-a-default-rtdb.europe-west1.firebasedatabase.app/gallery.json";

const GalleryMain = ({ id }) => {
  const [gallery, setGallery] = useState({});
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(URL);
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

  const showGalleryItems = (id) => {
    switch (id) {
      case "-NKHb9fYfE82rwSCdHPU":
        return Object.keys(gallery).filter((key) => key === "1");
      case "-NKHfp7NtXcWAqV1Uvg-":
        return Object.keys(gallery).filter((key) => key === "2" || key === "3");
      case "-NKHhYGqr6PDxhpOiEHM":
        return Object.keys(gallery).filter((key) => key === "4" || key === "5"|| key === "6");
      case "-NKHji9mdD7Z16_HZhAf":
        return Object.keys(gallery).filter((key) => key === "7" );
      case "-NKHsSp5fOn2U4SfrDf1":
        return Object.keys(gallery).filter((key) => key === "8" || key === "9");
      case "-NKHtHPPmY8I2mIc055J":
        return Object.keys(gallery).filter((key) => key === "10" || key === "11");
      case "-NKHuHOnR0Ln2ELWYjkr":
        return Object.keys(gallery).filter((key) => key === "12" || key === "13");
      case "-NKI9pZrkEUd_Q4osscG":
        return Object.keys(gallery).filter((key) => key === "14" || key === "15");
      case "-NKIB3wNzcBmm4k7UHJ5":
        return Object.keys(gallery).filter((key) => key === "16" || key === "17");
      case "-NKIC1LzTGmpnhP22R4l":
        return Object.keys(gallery).filter((key) => key === "18" || key === "19");
      case "-NKICwhNmVENR-lBoSjn":
        return Object.keys(gallery).filter((key) => key === "20" || key === "21");
      default:
        return Object.keys(gallery);
    }
  };

  return (
    <div className={classes["gallery-container"]}>
      <h2 className={classes["title-gallery"]}>Galleries</h2>
        <span></span>

      <div className={classes.gallery}>
        {pending ? (
          <DualRing />
        ) : (
          showGalleryItems(id).map((key) => (
            <GalleryItem
              key={key}
              id={gallery[key].id}
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
