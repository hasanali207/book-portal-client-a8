import { useState, useEffect } from 'react';
import BarCharts from '../components/BarCharts';

const PageRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getDataStorage = localStorage.getItem('books');
    if (getDataStorage) {
      setBooks(JSON.parse(getDataStorage));
    }
  }, []);

  return (
    <div className='flex justify-center items-center py-6'>
      
        <BarCharts  />
   
    </div>
  );
};

export default PageRead;