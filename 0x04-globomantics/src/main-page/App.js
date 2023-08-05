import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../House/HouseFromQuery";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results/SearchResults";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch("./houses.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const houses = await response.json();
        console.log(houses);
        setAllHouses(houses);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show an error message to the user
      }
    };
    fetchHouses();
  }, []);

 // console.log(allHouses);

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
        <HouseFilter allHouses={allHouses} />
        <Routes>
          <Route
            path="/searchresults/:country"
            element={<SearchResults allHouses={allHouses} />}
          ></Route>
          <Route
            path="/house/:house"
            element={<HouseFromQuery allHouses={allHouses} />}
          ></Route>
          <Route
            path="/"
            element={<FeaturedHouse house={featuredHouse} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
