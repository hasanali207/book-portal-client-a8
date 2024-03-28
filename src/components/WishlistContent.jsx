import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import Book from "./Book";
const WishlistContent = ({book}) => {
    const {
        name,
        image,
        tags,
        author,
        category, 
        ratings,
        totalpages,
        yearOfPublishing,
        publisher, id
      } = book;

      
      return (
        <>
          <div className="min-h-[200px] border p-4 mb-5  border-[#13131326]">
            <div className="flex flex-col lg:flex-row  gap-6  ">
              <div className="bg-graybg p-6 rounded-2xl min-w-72 flex items-center justify-center">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
              </div>
              <div className="flex-grow">
                <h1 className="text-3xl font-bold my-3">{name}</h1>
    
                <p>By: {author}</p>
    
                <div className="flex items-center my-3 gap-6">
                  <div className="flex items-center gap-5">
                    <span className="font-semibold">Tag</span>
                    {tags.map((tag) => (
                      <div
                        key={tag}
                        className="bg-[#23be0a0d] rounded-xl p-2 text-sm text-green font-medium "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 items-center">
                  <CiLocationOn></CiLocationOn>
                    <h1>Year of Publish:</h1>    
                    <h1>  {yearOfPublishing}</h1>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex gap-2 items-center">
                    <FaRegUser></FaRegUser>
                    <h1>Publisher: {publisher}</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBookReader></FaBookReader>
                    <h1>Read Page:</h1>    
                    <h1>{totalpages}</h1>
                  </div>
                </div>
    
                <div className="flex items-center gap-9 mt-4 border-[#13131326] border-t-2 pt-3 ">
                  <h3 className="bg-[#328eff26] rounded-xl p-2 text-sm text-[#328eff] font-medium ">
                    {category}
                  </h3>
                  <h2 className="bg-[#ffac3326] rounded-xl p-2 text-sm text-[#ffac33] font-medium ">
                    {ratings}
                  </h2>
                  <Link to={`/book/${id}`} onClick={Book}>
              <button className="btn bg-green rounded-3xl text-xl text-white">View Details</button>
              </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};

export default WishlistContent;