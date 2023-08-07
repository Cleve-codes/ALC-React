import { useState, useEffect } from 'react';

const useHouses = () => {
   const [allHouses, setAllHouses] = useState([]);

   useEffect(() => {
     const fetchHouses = async () => {
       try {
         const response = await fetch("./houses.json");
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
         const houses = await response.json();
         // console.log(houses);
         setAllHouses(houses);
       } catch (error) {
         console.error("Error fetching data:", error);
         // Handle the error, e.g., show an error message to the user
       }
     };
     fetchHouses();
   }, []);

   return allHouses;
}

export default useHouses