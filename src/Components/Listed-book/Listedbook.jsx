import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Readbook from "../Readbook/Readbook";
import Wishlist from "../Wishlist/Wishlist";
import { useContext, useEffect, useState } from "react";
import {
  getbookitems,
  getwishbookitems,
  removewishbook,
  removebook,
} from "../../Utilities/Utilities";
import { booksDataContext } from "../LandingPage/LandingPage";

const Listedbook = () => {
  const books = useContext(booksDataContext);
  const [readbooks, setreadbooks] = useState([]);
  const [wishbooks, setwishbooks] = useState([]);
  const [sort, setsort] = useState("");

  useEffect(() => {
    const read = getbookitems();
    const readbook = read.map((read) => parseInt(read));

    const reads = books.filter((book) => readbook.includes(book.bookId));

    setreadbooks(reads);

    const wish = getwishbookitems();
    const wishbook = wish.map((wish) => parseInt(wish));

    const wishes = books.filter((book) => wishbook.includes(book.bookId));

    setwishbooks(wishes);
  }, [books]);

  const delreadbook = (id) => {
    let newreadbook = readbooks.filter((book) => book.bookId !== id);
    setreadbooks(newreadbook);
    removebook(id);
  };

  const delwishlist = (id) => {
    let newwishlist = wishbooks.filter((book) => book.bookId !== id);
    setwishbooks(newwishlist);
    removewishbook(id);
  };

  const handlesort = (type) => {
    setsort(type);
    if (type == "Page") {
      const sortedbypage = [...readbooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setreadbooks(sortedbypage);

      const sortedbypage1 = [...wishbooks].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setwishbooks(sortedbypage1);
    } else {
      const sortedbyrating = [...readbooks].sort((a, b) => a.rating - b.rating);
      setreadbooks(sortedbyrating);

      const sortedbypage1 = [...wishbooks].sort((a, b) => a.rating - b.rating);
      setwishbooks(sortedbypage1);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-[#e1e1e1] text-center h-24 rounded-2xl flex justify-center items-center mb-10">
        <h1 className="font-bold text-4xl ">Books</h1>
      </div>
      <div className="text-center mb-10">
        <div className="dropdown dropdown-center ">
          <div
            tabIndex={0}
            role="button"
            className=" m-1 btn btn-success text-white"
          >
            Sort By {sort ? sort : ""}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button
                className="btn"
                onClick={() => {
                  handlesort("Page");
                }}
              >
                Page
              </button>
            </li>
            <li>
              <button
                className="btn"
                onClick={() => {
                  handlesort("Rating");
                }}
              >
                Rating
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Read Books and wishlist tab */}

      {}
      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {readbooks.map((book) => {
            return (
              <Readbook
                key={book.bookId}
                book={book}
                delreadbook={delreadbook}
              />
            );
          })}
        </TabPanel>
        <TabPanel>
          {wishbooks.map((book) => {
            return (
              <Wishlist
                key={book.bookId}
                book={book}
                delwishlist={delwishlist}
              />
            );
          })}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listedbook;
