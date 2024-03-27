import toast from 'react-hot-toast'

let isBookmarked = false;
let isWishlisted = false;

export const getBooks = () => {
  let books = []
  const storedBooks = localStorage.getItem('books')
  if (storedBooks) {
    books = JSON.parse(storedBooks)
  }
  return books;
}

export const saveBook = book => {
  if(isBookmarked) {
    return toast.error('Already Bookmarked!');
  }

  const storedBooks = getBooks();
  const isExist = storedBooks.find(b => b.id === book.id);

  if (isExist) {
    return toast.error('Already Bookmarked!');
  }

  const books = [...storedBooks, book];
  localStorage.setItem('books', JSON.stringify(books));
  toast.success('Book Bookmarked Successfully!');

  isBookmarked = true;
  isWishlisted = false;

  return books;
}

export const getWishlist = () => {
  let wishlist = [];
  const storedWishlist = localStorage.getItem('wishlist');
  if (storedWishlist) {
    wishlist = JSON.parse(storedWishlist);
  }
  return wishlist;
}

export const saveWishlist = book => {
  if(isWishlisted) {
    return toast.error('Already Wishlisted!');
  }

  const storedWishlist = getBooks();
  const isExist = storedWishlist.find(b => b.id === book.id);

  if (isExist) {
    return toast.error('Already In Bookmark!');
  }

  const wishlist = [...storedWishlist, book];
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  toast.success('Book added to Wishlist Successfully!');

  isBookmarked = false;
  isWishlisted = true;

  return wishlist;
}