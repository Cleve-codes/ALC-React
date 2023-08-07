import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../House/HouseFromQuery";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results/SearchResults";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

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
            path="/house/:id"
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
