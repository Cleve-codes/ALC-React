import React from 'react'
import { useRef, useState, useEffect } from 'react';
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

const ImageOnScroll = () => {
 const imageRefs = useRef([])

 const isinView = (index) => {
    const rect = imageRefs.current[index].getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

const [inView, setInView] = useState([]);

useEffect(()=>{
  // Initialize inView state for each image
  setInView(original.map((_, i) => isinView(i)));

  const scrollHandler = () => {
    // Update inView state for each image
    setInView(original.map((_, i) => isinView(i)));
  };

  window.addEventListener("scroll", scrollHandler);
  return () => {
    window.removeEventListener("scroll", scrollHandler);
  };
}, [])




  return (
    <div className="gallery">
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <img
            src={inView[i] ? original[i] : blackNwhite[i]}
            alt={i + 1}
            id={i + 1}
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
          />
        );
      })}
    </div>
  );
}

export default ImageOnScroll