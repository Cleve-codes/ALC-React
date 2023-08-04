import React from "react";
import SearchResultsRow from "./SearchResultsRow";
import { useParams } from "react-router-dom";

const SearchResults = ({ allHouses }) => {
  const { country } = useParams();
  const filteredHouses = allHouses.filter((h) => h.country === country);
  //console.log(country, "country");

  return (
    <div>
      <h4>Results for {country}</h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((h) => (
            <SearchResultsRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
