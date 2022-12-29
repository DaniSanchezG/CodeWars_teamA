import classes from "./ButtonNeonGallery.module.css";
import { useState,useEffect } from "react";

const ButtonNeon = ({ onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(onHover);
  }, [onHover]);

  return (
    <>
      <div className={isHovered? classes.hovered : classes.iconWars}>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default ButtonNeon;
