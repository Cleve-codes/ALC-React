import React from "react";
import { useParams } from "react-router-dom";
import House from "./House";

const HouseFromQuery = ({ allHouses }) => {
  const { id } = useParams();
  const house = allHouses.find((h) => h.id === parseInt(id));
  console.log(id, "id", "house", house)

  if (!house) console.log(house);
  return <House house={house} />;
};

export default HouseFromQuery;
