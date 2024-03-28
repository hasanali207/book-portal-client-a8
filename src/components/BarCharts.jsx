import React, { useEffect, useState } from 'react';

const BarCharts = () => {

  
 const [data, setData] = useState([]);

 useEffect(() => {
   // Fetch data from local storage
   const savedData = JSON.parse(localStorage.getItem('books')) ;
   setData(savedData);
 }, []);

  return (
    <div>
      <h1>
        {data.name}
      </h1>

      
    </div>
  );
};

export default BarCharts;