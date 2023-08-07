import { useMemo } from "react";

const useFeaturedHouse = (allHouses) => {
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomHouse = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomHouse];
    }
  }, [allHouses]);

  return featuredHouse;
};

export default useFeaturedHouse;
