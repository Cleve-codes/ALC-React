import React from "react";
import { useState } from "react";

  
const images = [
  "./Images/bob-marley-1.png",
  "./Images/bob-marley-2.png",
  "./Images/bob-marley-3.png",
  "./Images/bob-marley-4.png",
];

const ImageHovered = () => {
  const [hovered, setHovered] = useState(null);

  const onHover = (e) => {
    setHovered(e.target.id);
  };

  const onHoverOut = (e) => {
    setHovered(null);
  };

  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <img
            src={images[i]}
            alt={`bob marley ${i + 1}`}
            onMouseEnter={onHover}
            onMouseLeave={onHoverOut}
            key={i}
            id={i}
          />
        );
      })}
      
    </>
  );
};

export default ImageHovered;
