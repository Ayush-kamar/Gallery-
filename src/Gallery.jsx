import React, { useEffect, useState } from 'react';

import Card from './Card';

const Gallery = () => {
  const [state, setState] = useState([]);  
  const [loader, setLoader] = useState(true);
  const Api = `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`;  
  
  // Function to fetch the data
  async function fetchAbilities() {
      setLoader(false);  
      const response = await fetch(Api);
      const data = await response.json();
      setState(data.photos); 
      console.log(data);

  }

  useEffect(() => {
    fetchAbilities();
    console.log("API is correctly called");
  }, []);

  return (
    <div className="Pokemon-List-Wrapper">
     
      {loader ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {state.map((data, index) => (
            <Card key={index} img={data.url} id ={data.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
