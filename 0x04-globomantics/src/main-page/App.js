import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("./houses.json");
      const houses = await response.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomHouse = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomHouse];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header />
      </div>
    </Router>
  );
}

export default App;
