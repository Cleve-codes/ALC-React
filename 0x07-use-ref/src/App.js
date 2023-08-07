import { useState } from "react";
import bob1 from "./bob-marley-1.png";
import bob2 from "./bob-marley-2.png";
import bob3 from "./bob-marley-3.png";
import bob4 from "./bob-marley-4.png";

function App() {
  const [hovered, setHovered] = useState(null);

  const onHover = (e) => {
    setHovered(e.target.id);
  };

  const onHoverOut = (e) => {
    setHovered(null);
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
