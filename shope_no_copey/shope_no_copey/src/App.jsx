import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Nawbar } from "./components/Navbar/Navbar";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Auth } from "./components/Auth/Auth";
import { Page } from "./components/Page/Page";


import "./App.css";
import { UserProfile } from "./components/userProfile/userProfile";



export default function App() {
  return (
    <BrowserRouter>
      <Nawbar />
      <div className="App container">
        <Routes>
          <Route exact path="/" element={<Content /> } />
          <Route path="/auth" element={<Auth />} />
          <Route path="/user" element={<UserProfile />} />
          <Route exact path="/page/:id" element={<Page/>} /> 
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

{
  /* <BrowserRouter>
<Header />
<div className="App ">
  <Routes>

          <Route exact  path='/' element={<Content/>} /> 
          <Route exact path='/posts/:postId'  element={<PostProduct/>} />
          <Route  path='/auth' element={<Auth/>} />

  </Routes>
  <Footer/>
  </div>
  </BrowserRouter> */
}
