import React, { useContext } from "react";
import { booksDataContext } from "../LandingPage/LandingPage";
import { Link } from "react-router";

const Books = () => {
  const books = useContext(booksDataContext);

  return (
    <section className="max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold playfair-display text-center mb-9">
        Books
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 ">
        {books.map((book) => {
          return (
            <Link to={`/description/${book.bookId}`}>
              <div className="card bg-base-100 w-96 shadow-sm rounded-xl mx-auto">
                <figure className="bg-[#d9d9d9] m-2 rounded-2xl">
                  <img
                    src={book.image}
                    alt="Shoes"
                    className="h-44 px-24 py-8 "
                  />
                </figure>
                <div className="card-body">
                  <div className="flex space-x-3">
                    {book.tags.map((tag) => {
                      return (
                        <button className="btn text-[#23BE0A] rounded-2xl">
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                  <div className="h-28">
                    <h2 className="font-bold text-xl playfair-display">
                      {book.bookName}
                    </h2>
                    <h2 className="font-medium text-base text-[#4f4e4e] ">
                      By: {book.author}
                    </h2>
                  </div>

                  <div className="flex justify-between border-t-2 border-dashed border-gray-300 pt-4">
                    <div>
                      <p className="font-medium text-base text-[#4f4e4e]">
                        Fiction
                      </p>
                    </div>
                    <div>
                      <p>{book.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Books;
