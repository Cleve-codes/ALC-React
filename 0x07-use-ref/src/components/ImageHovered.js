import React from "react";
import { useState } from "react";
import bob1 from "./Images/bob-marley-1.png";
import pac1 from "./Images/Tupac-1.png";
import bob2 from "./Images/bob-marley-2.png";
import pac2 from "./Images/Tupac-2.png";
import bob3 from "./Images/bob-marley-3.png";
import pac3 from "./Images/Tupac-3.png";
import bob4 from "./Images/bob-marley-4.png";
import pac4 from "./Images/Tupac-4.png";

const original = [bob1, bob2, pac1, pac2];
const blackNwhite = [bob3, bob4, pac4, pac3];

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
            src={hovered === `${i + 1}` ? original[i] : blackNwhite[i]}
            alt={i + 1}
            id={i + 1}
            onMouseEnter={onHover}
            onMouseLeave={onHoverOut}
            key={i}
          />
        );
      })}
    </>
  );
};

export default ImageHovered;
