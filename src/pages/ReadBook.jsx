import  { useEffect, useState } from 'react';
import ReadContent from '../components/ReadContent';
import { getBooks } from '../utils';

const ReadBook = () => {
    const [books, setBooks] = useState([]);
    const [sortedBooks, setSortedBooks] = useState([]);
    const [sortOption, setSortOption] = useState('title');

    useEffect(() => {
        const storedBooks = getBooks();
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
        <div className='py-8 '>
            <div className="mb-4 absolute  top-[30%] left-1/2 transform -translate-x-1/2">
                <label htmlFor="sort"></label>
                <select className='text-center rounded-xl p-2 py-3 bg-green mt-8 text-xl text-white' id="sort" value={sortOption} onChange={handleSortChange}>
                    
                    <option selected>Sort</option>
                    <option value="ratings">ratings</option>
                    <option value="totalpages">totalpages</option>
                    <option value="yearOfPublishing">yearOfPublishing</option>
                   
                    {/* Add more sorting options as needed */}
                </select>
            </div>
            {sortedBooks.map(book => <ReadContent key={book.id} book={book}></ReadContent>)}    


            
        </div>
    );
};

export default ReadBook;
