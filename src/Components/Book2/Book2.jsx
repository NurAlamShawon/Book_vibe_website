import React, { useContext } from "react";
import { booksDataContext } from "../LandingPage/LandingPage";
// import { clickcardContext } from "../LandingPage/LandingPage";
const Book2 = () => {
  const books = useContext(booksDataContext);
  //    const [click, setclick] = useContext(clickcardContext);

  return (
    <div>
      {books.map((book) => {
        return (
          <div className="flex border-1 border-gray-200 mb-5 rounded-2xl drop-shadow-md">
            <div className="bg-[#d9d9d9] m-2 rounded-2xl w-2/12 mr-6 ">
              <img
                src={book.image}
                alt="Shoes"
                className="h-44 w-32 mx-11 my-7  "
              />
            </div>
            <div className=" w-10/12 pl-5 space-y-4">
            <div className="space-y-4">
            <h2 className="font-bold text-xl playfair-display w-full ">
                {book.bookName}
              </h2>
              <h2 className="font-medium text-base text-[#4f4e4e] w-full ">
                By: {book.author}
              </h2>
            </div>
             

              <div className="flex">
                <p >
                  <span className="mr-4">Tag</span>
                  {book.tags.map((tag) => {
                    return (
                      <button className="btn text-[#23BE0A] rounded-2xl mr-4">
                        #{tag}
                      </button>
                    );
                  })}{" "}
                </p>
                <span className="flex items-center justify-center">
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span>Year of Publishing:{book.yearOfPublishing}</span>
                </span>
              </div>

              <div className="flex">
                <div className="flex mr-6 space-x-5">
                  <span>
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
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </span>
                  <span>Publisher: {book.publisher}</span>
                </div>

                <div className="flex space-x-5">
                  <span>
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
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </span>
                  <span> Page: {book.totalPages}</span>
                </div>
              </div>

         <div className="border-1 border-dashed border-gray-200">
</div>

              <div className="space-x-5">
                <button className="btn btn-soft btn-info rounded-4xl">Category: {book.category}</button>
                <button className="btn btn-soft btn-warning rounded-4xl">Rating: {book.rating}</button>
                <button className="btn btn-success text-white rounded-4xl">
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Book2;
