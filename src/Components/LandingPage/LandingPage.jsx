import React, { createContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";



export const booksdataContext = createContext("");

const LandingPage = () => {
 

  const fetchdata = async () => {
    const res = await fetch("/public/booksData.json");
    return res.json();
  };

  const books = fetchdata();

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <booksdataContext value={books}>
          <Outlet></Outlet>
        </booksdataContext>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default LandingPage;
