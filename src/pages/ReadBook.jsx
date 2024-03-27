import React, { useEffect, useState } from 'react';
import ReadContent from '../components/ReadContent';
import { getBooks } from '../utils';

const ReadBook = () => {
    const [books, setBooks] = useState([])

    useEffect(()=> {
        const  storedBooks = getBooks()
        setBooks(storedBooks)
    },[])

    console.log(books);
    
    return (
        <div className='py-8'>
           
           {books.map(book => <ReadContent key={book.id} book={book}></ReadContent>)}    
           
        </div>
    );
};

export default ReadBook;