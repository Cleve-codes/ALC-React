import { useState } from "react";
import bob1 from "./bob-marley-1.png";
import bob2 from "./bob-marley-2.png";
import bob3 from "./bob-marley-3.png";
import bob4 from "./bob-marley-4.png";

function App() {
  const [blackNwhite, setBlackNWhite] = useState(false);

  const onHover = () => {
    setBlackNWhite(!blackNwhite);
  };

  const onHoverOut = () => {
    setBlackNWhite(!blackNwhite);
  };

  return (
    <div className="App">
      <img
        src={blackNwhite ? bob1 : bob3}
        alt="Bob marley"
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
      />
      <img
        src={blackNwhite ? bob2 : bob4}
        alt="Bob marley"
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
      />
    </div>
  );
}

export default App;
