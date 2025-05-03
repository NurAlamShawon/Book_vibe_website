import React, { useContext } from "react";
import { booksDataContext } from "../LandingPage/LandingPage";
import { useParams } from "react-router";
import { setwishbookitems, setbookitems} from "../../Utilities/Utilities"
const Description = () => {
  

  const books = useContext(booksDataContext);
  const params = useParams();
  const id = parseInt(params.bookId);

  const click = books.find((book) => book.bookId == id);


  // add to wishlist function

  const addWishlist = (bookid) => {
    setwishbookitems(bookid);
  };



  const addreadlist = (bookid) => {
    setbookitems(bookid);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="xl:flex">
        <div className="xl:w-6/12 bg-[#d9d9d9] m-2 rounded-2xl flex justify-center items-center">
          <img
            src={click.image}
            alt=""
            srcset=""
            className="w-7/12 h-10/12 mx-auto"
          />
        </div>

        <div className="xl:w-6/12 space-y-6">
          <h1 className="font-bold text-4xl playfair-display ml-3">
            {click.bookName}
          </h1>
          <p className="font-medium text-xl text-[#4f4e4e] ml-3">
            By :{click.author}
          </p>

          {/* fiction table  */}
          <div className="overflow-x-auto rounded-box border border-base-content/5 w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Fiction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <span className="font-bold text-base">Review </span>
                      {click.rating}
                    </p>
                    <p>
                      <span className="font-bold text-base mr-2">Tags</span>
                      {click.tags.map((tag) => {
                        return (
                          <button className="btn text-[#23BE0A] rounded-2xl xl:mr-4">
                            #{tag}
                          </button>
                        );
                      })}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* rating table */}
          <div className="overflow-x-auto   max-w-sm">
            <table className="table border-separate">
              <tbody>
                <tr>
                  <td>Number of Pages:</td>
                  <td className="font-bold text-base">{click.totalPages}</td>
                </tr>

                <tr>
                  <td>Publisher:</td>
                  <td className="font-bold text-base">{click.publisher}</td>
                </tr>
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="font-bold text-base">
                    {click.yearOfPublishing}
                  </td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td className="font-bold text-base">{click.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-start items-center ml-3">
            <button class="btn mr-4"
            onClick={() => {
              addreadlist(click.bookId);
            }}
            
            >Read</button>
            <button
              className="btn btn-info text-white"
              onClick={() => {
                addWishlist(click.bookId);
              }}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
