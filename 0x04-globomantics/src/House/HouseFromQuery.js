import React from "react";
import { useParams } from "react-router-dom";
import House from "./House";

const HouseFromQuery = ({ allHouses }) => {
  const { house } = useParams();

  if (!allHouses.length) {
    return <div>Loading...</div>;
  }

  const selectedHouse = allHouses.find((h) => h.id === parseInt(house));

  if (!selectedHouse) {
    return <div>House not found</div>;
  }

  return <House house={selectedHouse} />;
};

export default HouseFromQuery;
