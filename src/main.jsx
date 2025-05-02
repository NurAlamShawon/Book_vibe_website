import { StrictMode } from 'react'
import React from 'react'; 
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Herosection from './Components/Herosection/Herosection.jsx';
import Listedbook from './Components/Listed-book/Listedbook.jsx';
import PageToRead from './Components/Page-to-read/PageToRead.jsx';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import Description from './Components/Description/Description.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:LandingPage,
    children:[

      {index:true, Component:Herosection},
      {path:"/listed-book", Component:Listedbook},
      {path:"/page-to-read", Component:PageToRead},
      {path:"/description" ,Component:Description},
      
    ]
  },
]);




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <div data-theme="light" className="min-h-screen bg-base-200 text-base-content"> 
    <RouterProvider router={router} />
  </div>

</React.StrictMode>
)
