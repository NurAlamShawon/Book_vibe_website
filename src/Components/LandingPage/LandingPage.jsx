import React, { createContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

export const booksDataContext = createContext(null);

export const clickcardContext = createContext([]);

const LandingPage = () => {
  const [books, setBooks] = useState([]);
  const [click, setclick] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("/booksData.json"); // "/public" is not needed
      const data = await res.json();
      setBooks(data);
    };

    fetchdata();
  }, []);

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <booksDataContext.Provider value={books}>
          <clickcardContext.Provider value={[click, setclick]}>
            <Outlet></Outlet>
          </clickcardContext.Provider>
        </booksDataContext.Provider>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default LandingPage;
