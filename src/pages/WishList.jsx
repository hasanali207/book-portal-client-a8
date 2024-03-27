
import { getWishlist } from '../utils';
import WishlistContent from '../components/WishlistContent';
import { useEffect, useState } from 'react';

const WishList = () => {
    const [books, setBooks] = useState([])
    const [sortedBooks, setSortedBooks] = useState([]);
    const [sortOption, setSortOption] = useState('title');

useEffect(() => {
        const storedBooks = getWishlist();
        setBooks(storedBooks);
        setSortedBooks(storedBooks);
    }, []);

    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);
        sortBooks(option);
    };
    
    const sortBooks = (option) => {
        const sorted = [...books];
        sorted.sort((a, b) => {
            if (a[option] < b[option]) return -1;
            if (a[option] > b[option]) return 1;
            return 0;
        });
        setSortedBooks(sorted);
    };
    
    return (
        <div className='py-8'>
            <div className="mb-4 absolute top-[170px] left-[40%]">
                <label htmlFor="sort">Sort By: </label>
                <select id="sort" value={sortOption} onChange={handleSortChange}>
                    
                    <option value="ratings">ratings</option>
                    <option value="totalpages">totalpages</option>
                    <option value="yearOfPublishing">yearOfPublishing</option>
                   
                    {/* Add more sorting options as needed */}
                </select>
            </div>

           {sortedBooks.map(book => <WishlistContent key={book.id} book={book}></WishlistContent>)}    
           
        </div>
    );
    
};

export default WishList;