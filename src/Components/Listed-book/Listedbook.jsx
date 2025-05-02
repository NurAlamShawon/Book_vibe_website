

import Book2 from "../Book2/Book2";

const Listedbook = () => {
 


  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-[#e1e1e1] text-center h-24 rounded-2xl flex justify-center items-center mb-10">
        <h1 className="font-bold text-4xl ">Books</h1>
      </div>
      <div className="text-center mb-10">
        <button className="btn btn-success text-white">
          Sort by
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>

      
      <div className="flex mb-5">
        <button
          className=" w-2/12 cursor-pointer border-l-2 border-t-2 border-r-2 border-gray-200 p-2 rounded-t-xl"
          
        >
          Read Books
        </button>
        <button className="cursor-pointer w-10/12 border-b-2 border-gray-200 p-2 text-start" >
          Wishlist
        </button>
      </div>
      <Book2></Book2>
    </div>
  );
};

export default Listedbook;
