import React from "react";
import image1 from "../img/first.jpeg";
import image2 from "../img/second.jpeg";
import image3 from "../img/third.jpeg";
import image4 from "../img/fourth.jpeg";
import classes from "../css/Preview.module.css";
import { useState, useEffect } from "react";
import { ProgressBar } from "./ProgressBar";

function ImagePreview() {
  const contentPreview = [
    {
      index: 0,
      url: image1,
      title: "STAR WARS: BEST OF 2022",
    },
    {
      index: 1,
      url: image2,
      title: "LUCASFILM´S STAR WARS HOLIDAY CARDS",
    },
    {
      index: 2,
      url: image3,
      title: "THE HIGH REPUBLIC SHOW",
    },
    {
      index: 3,
      url: image4,
      title: "FAVORITE EPISODE OF ANDOR (SO FAR)",
    },
  ];

  const [image, setImage] = useState(contentPreview);

  return (
    <div className={classes.divPreview}>
      {image.map((image, index) => (
        <div className={classes.divComponents} data-key={index}>
          <img src={image.url} className={classes.img} />
          <div className={classes.divExtra} key={index}>
            <ProgressBar/>
            <div className={classes.divText}>
            <span className={classes.title}>{image.title}</span>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default ImagePreview;
