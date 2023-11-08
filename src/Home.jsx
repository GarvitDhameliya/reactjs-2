import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/posts").then((res) => {
      console.log(res.data);

      setdata(res.data || []);
    });
  }, []);

  return (
    <div>
      <div>
        {data.map((val, ind) => {
          return (
            <>
              <h1>{val.id}</h1>
              <h1>{val.title}</h1>
              <h1>{val.author}</h1>
              <Link to={`/${val.title}`}>view</Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
