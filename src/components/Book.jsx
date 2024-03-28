
import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishlist } from "../utils";

const Book = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.id == id);

  const { name, author, image, publisher, yearOfPublishing, totalpages, ratings, tags, review, category } = book;

const handleReadBook= (book) =>{
  saveBook(book)
  
}
const handleWishlist= (book) =>{
  saveWishlist(book)
 
  
}

  return (
    <section>
      <div className="">
        <div className="flex py-20 flex-col lg:flex-row   gap-6">
          <div className="bg-graybg w-1/2 flex justify-center items-center p-6">
            <img src={image} className="rounded-lg shadow-2xl " />
          </div>
          <div className="py-6">
            
            <h2 className="card-title my-4">{name}</h2>
            <p>By: {author}</p>
            
            <div className="flex justify-between items-center mt-4 border-[#13131326] border-t-2 pt-3 border-dashed">
              
            <h3>{category}</h3>
            </div>
            
            <div className="flex justify-between items-center mt-4 border-[#13131326] border-t-2 pt-3 border-dashed">
              
            
            <p>Review:{review}</p>
            </div>
            
            <div className="flex gap-5">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-[#23be0a0d] rounded-xl p-2 text-sm text-green font-medium "
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="flex justify-between gap-12 w-[250px]">
                <h1>Number Of pages:</h1>
                <h1 className="font-semibold text-text-primary">{totalpages}</h1>
            </div>
            <div className="flex justify-between gap-12 w-[250px]">
                <h1>Publisher:</h1>
                <h1 className="font-semibold text-text-primary">{publisher}</h1>
            </div>
            <div className="flex justify-between gap-12 w-[250px]">
                <h1>Year Of Publishing:</h1>
                <h1 className="font-semibold text-text-primary">{yearOfPublishing}</h1>
            </div>
            <div className="flex justify-between gap-12 w-[250px]">
                <h1>Rating:</h1>
                <h1 className="font-semibold text-text-primary">{ratings}</h1>
            </div>
            
            <div className="flex gap-6">
            <button onClick={()=> handleReadBook(book)} className="btn bg-green mt-8 text-xl text-white">Read Book</button>
        <button onClick={() => handleWishlist(book)} className="btn bg-[#59C6D2] mt-8 text-xl text-white">View The List</button>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Book;
