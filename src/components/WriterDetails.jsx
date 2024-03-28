import React from "react";

const WriterDetails = ({ item }) => {
  const { name, profile_image, birth_year, total_books, best_book } = item;
  return (
    <div>
        
      <div className="flex justify-between shadow-xl bg-base-100 border border-[#13131326] min-h-[250px] px-3 rounded-2xl">
        <figure className="flex items-center justify-center">
          <img className="max-w-[100px] h-[200px] rounded-badge"
            src={profile_image}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title">{name}</h2>
            <p>Year Of Birth: {birth_year}</p>
            <p>Total book: {total_books}</p>
            <p>Best  Book: {best_book}</p>
        </div>
      </div>
    </div>
  );
};

export default WriterDetails;
