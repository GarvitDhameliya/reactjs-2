import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Detail from "./Detail";
import { MyContext } from "./Mycontext";
import { useState } from "react";

function App() {
  const [data, setdata] = useState("");

  return (
    <div>
      <div></div>

      {/* <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/:title" exact element={<Detail />} />
      </Routes> */}
      <MyContext.Provider value="garvit">
        <Detail />
      </MyContext.Provider>
    </div>
  );
}

export default App;
