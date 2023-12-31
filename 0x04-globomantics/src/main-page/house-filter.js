import React from "react";
import { useNavigate } from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
  const navigate = useNavigate();

  const countries = allHouses
    ? Array.from(new Set(allHouses.map((house) => house.country)))
    : [];
  countries.unshift(null);

  const onSearchCountry = (e) => {
    const country = e.target.value;
    navigate(`/searchresults/${country}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchCountry}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
