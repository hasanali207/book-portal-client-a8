import { useState, useEffect } from 'react';
import BarCharts from '../components/BarChart';

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
      
        <BarCharts book={books}  />
   
    </div>
  );
};

export default PageRead;