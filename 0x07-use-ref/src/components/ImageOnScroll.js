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
 const ImageRef = useRef(null)

 const isinView = () => {
    const rect = ImageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

const [inView, setInView] = useState(false);

useEffect(()=>{
    window.addEventListener('scroll', scrollHandler);
    return ()=>{
        window.removeEventListener("scroll", scrollHandler);
    }
}, [])

const scrollHandler = () => {
    setInView(isinView())
}


  return (
    <div className="gallery">
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <img
            src={inView ? original[i] : blackNwhite[i]}
            alt={i + 1}
            id={i + 1}
            key={i}
            ref={ImageRef}
          />
        );
      })}
    </div>
  );
}

export default ImageOnScroll