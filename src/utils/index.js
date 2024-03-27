import toast from 'react-hot-toast'

export const getBooks = () => {
  let books = []
  const storedBlogs = localStorage.getItem('books')
  if (storedBlogs) {
    books = JSON.parse(storedBlogs)
  }
  return books;
}
export const saveBooks = book => {
  let books = getBooks()
  const isExist = books.find(b => b.id === book.id)
  if (isExist) {
    return toast.error('Already Bookmarked!')
  }
  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
  toast.success('Book Bookmarked Successfully!')
}


export const getWishlist = () => {
  let books = []
  const storedBlogs = localStorage.getItem('wishlists')
  if (storedBlogs) {
    books = JSON.parse(storedBlogs)
  }
  return books;
}
export const saveWishlist = book => {
  let books = getWishlist()
  const isExist = books.find(b => b.id === book.id)
  if (isExist) {
    return toast.error('Already Bookmarked!')
  }
  books.push(book)
  localStorage.setItem('wishlists', JSON.stringify(books))
  toast.success('Book Bookmarked Successfully!')
}




// export const deleteBlog = id => {
//   let blogs = getBlogs()
//   const remaining = blogs.filter(b => b.id !== id)
//   localStorage.setItem('blogs', JSON.stringify(remaining))
//   toast.success('Blog Removed from Bookmark!')
// }
