import { useEffect, useState, useMemo } from "react";
import Header from "./Header";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("./houses.json");
      const houses = response.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(()=>{
     if (allHouses.length) {
       const randomHouse = Math.floor(Math.random() * allHouses.length);
       return allHouses[randomHouse];
     }
  }, [allHouses])
 

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
