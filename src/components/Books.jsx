import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import Book from "./Book";


const Books = ({ item }) => {

    const {name, author, image, publisher, ratings, tags, id, category} = item
  return (
    
      <Link to={`/book/${id}`} onClick={Book} className="bg-base-100 border border-[#13131326] p-4">
        <figure className="bg-graybg flex items-center justify-center p-6 py-8 rounded-xl">
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="py-6">
        <div className="flex gap-5">
              {tags.map(tag => <div key={tag} className="bg-[#23be0a0d] rounded-xl p-2 text-sm text-green font-medium ">{tag}</div>)}          
        </div>
          <h2 className="card-title my-4">
        {name}
            
          </h2>
          <p>By: {author}</p>


          <div className="flex justify-between items-center mt-4 border-[#13131326] border-t-2 pt-3 border-dashed" >
            <h3>{category}</h3>
            <div className="flex items-center gap-2">
            <h3>{ratings} </h3>
            <FaRegStar></FaRegStar>
            </div>
          </div>
        </div>
        
      </Link>
    
  );
};

export default Books;
