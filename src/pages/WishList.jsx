import React, { useEffect, useState } from 'react';
import { getWishlist } from '../utils';
import WishlistContent from '../components/WishlistContent';

const WishList = () => {
    const [books, setBooks] = useState([])

    useEffect(()=> {
        const  storedBooks = getWishlist()
        setBooks(storedBooks)
    },[])

    console.log(books);
    
    return (
        <div className='py-8'>
           
           {books.map(book => <WishlistContent key={book.id} book={book}></WishlistContent>)}    
           
        </div>
    );
    
};

export default WishList;