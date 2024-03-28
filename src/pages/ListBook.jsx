import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListBook = () => {

  const [tabIndex, setTabIndex] = useState(0)

  return (
    <section>
      <div className="bg-graybg h-32 flex items-center justify-center rounded-2xl">
        <h1 className="text-center font-bold text-3xl ">List of Book</h1>
      </div>
        
      <div className="flex items-center mt-[70px] overflow-x-auto overflow-y-hidden   flex-nowrap dark:bg-gray-100 dark:text-gray-800 border-[#13131326]  border-b w-full mx-auto">
        <Link
          to={``}
          onClick={() => setTabIndex(0)}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? 'border font-semibold border-[#13131326] border-b-0' : ' border-[#13131326] border-b-0'
          }  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Book</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? 'border-[#13131326] font-semibold border border-b-0' : 'border-[#13131326] border-b-0'
          }  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Book</span>
        </Link>
        
     </div>
     <Outlet ></Outlet>
    </section>
  );
};

export default ListBook;
