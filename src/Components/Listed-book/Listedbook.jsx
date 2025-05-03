import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Readbook from "../Readbook/Readbook";
import Wishlist from "../Wishlist/Wishlist";
import { useContext, useEffect, useState } from "react";
import { getbookitems ,getwishbookitems ,removewishbook ,removebook} from "../../Utilities/Utilities";
import { booksDataContext } from "../LandingPage/LandingPage";

const Listedbook = () => {
  const books = useContext(booksDataContext);
  const [readbooks, setreadbooks] = useState([]);
  const [wishbooks, setwishbooks] = useState([]);

  const[delbook,setdelbook]=useState(0);
  const[delwishbook,setdelwishbook]=useState(0);

  useEffect(() => {
    const read = getbookitems();
    const readbook = read.map((read) => parseInt(read));

    const reads = books.filter((book) => readbook.includes(book.bookId));

    setreadbooks(reads);

  


    const wish = getwishbookitems();
    const wishbook = wish.map((wish) => parseInt(wish));
 
    const wishes = books.filter((book) => wishbook.includes(book.bookId));

    setwishbooks(wishes);

    
  }, []);




  useEffect(() => {
    delbook && removebook(delbook);
  }, delbook);

  useEffect(() => {
    delwishbook && removewishbook(delwishbook);
  }, delwishbook);





 
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

      {/* Read Books and wishlist tab */}




{


}
      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {readbooks.map((book) => {
            return (<Readbook key={book.bookId} book={book} setdelbook={setdelbook}/>)
          })
          }
        

    
        </TabPanel>
        <TabPanel>
          {wishbooks.map((book) => {
            return (<Wishlist key={book.bookId} book={book} setdelwishbook={setdelwishbook}/>)
          })}
          
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listedbook;
