import React from 'react'
import House from '../House/House';

const FeaturedHouse = ({house}) => {
if(house){
    
    return (
      <div>
        <div className="row featuredHouse">
          <h3 className="col-md-12 text-center">Featured House</h3>
        </div>
        <House house={house} />
      </div>
    );
    }
}
    
export default FeaturedHouse;