import React from "react";

const HouseFilter = ({ allHouses }) => {
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((house) => house.country)))
    : [];
  countries.unshift(null);
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HouseFilter;
