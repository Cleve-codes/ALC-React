import React from 'react'
import { useState } from "react";
import bob1 from "./Images/bob-marley-1.png";
import bob2 from "./Images/bob-marley-2.png";
import bob3 from "./Images/bob-marley-3.png";
import bob4 from "./Images/bob-marley-4.png";

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
      <img
        src={hovered === "1" ? bob1 : bob3}
        alt="Bob marley"
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
        id="1"
      />

      <img
        src={hovered === "2" ? bob2 : bob4}
        alt="Bob marley"
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
        id="2"
      />
    </>
  );
}

export default ImageHovered