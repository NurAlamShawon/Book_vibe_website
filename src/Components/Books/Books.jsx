import React, { use, useContext } from "react";


const Books = () => {
  const booksdata = useContext("booksdataContext");
  const books = use(booksdata);
  return (
    <div>
      <h1 className="text-4xl font-bold playfair-display">Books</h1>
      {books.map((book) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              {book.tags.map((tag) => {
                return <button className="btn text-[#23BE0A]">{tag}</button>;
              })}
              <h2 className="font-bold text-xl playfair-display">
                {book.bookName}
              </h2>
              <h2 className="font-medium text-base text-[#4f4e4e]">
                By: {book.author}
              </h2>
              <div className="flex justify-between">
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
        );
      })}
    </div>
  );
};

export default Books;
