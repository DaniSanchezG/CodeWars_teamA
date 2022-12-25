import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Gallery from "../components/Gallery/Gallery";
import DualRing from "../components/UI/Spinners/DualRing";
import classes from "./GalleryMain.module.css";

const GalleryMain = () => {
  const { pending, error, gallery, fetchGalleryHandler } = useFetch();

  useEffect(() => {
    fetchGalleryHandler();
  }, []);

  return (
    <main>
      {pending && <DualRing />}
      <section className={classes["gallery-content"]}>
        {!pending && gallery !== null && error === null && (
          <Gallery items={gallery} />
        )}
        {!pending && gallery === null && !error && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            No gallery availables. Add one?
          </h2>
        )}
        {!pending && error !== null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            {error.message}
          </h2>
        )}
      </section>
    </main>
  );
};

export default GalleryMain;
