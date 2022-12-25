import { useState } from "react";

const useFetch = () => {
  const [gallery, setGallery] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchGalleryHandler = async (
    method = "GET",
    gallery = {
      description: "",
      id: "",
      image: "",
      number_images: "",
      title: "",
    }
  ) => {
    try {
      setPending(true);
      setError(null);
      let response = null;
      const URL =
        "https://codewars-a-default-rtdb.europe-west1.firebasedatabase.app/";

      response = await fetch(URL + "/gallery.json", {
        method,
        headers: {
          "Content-Type": method !== "GET" ? "application/json" : "",
        },
        body:
          method !== "GET"
            ? JSON.stringify({
                description: gallery.description,
                id: gallery.id,
                image: gallery.image,
                number_images: gallery.number_images,
                title: gallery.title,
              })
            : null,
      });

      if (response.ok) {
        const data = await response.json();
        if (method === "GET") {
          setGallery(data);
        } else {
          fetchGalleryHandler();
        }
      }
    } catch (error) {
      setError({
        message: error.message || "Something went wrong!",
      });
    }
    setPending(false);
  };

  return { pending, error, gallery, fetchGalleryHandler };
};

export default useFetch;
