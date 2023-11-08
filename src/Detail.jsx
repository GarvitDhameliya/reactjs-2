import React, { useContext } from "react";
import { MyContext } from "./Mycontext";

const Detail = () => {
  // const { title } = useParams();

  // console.log(title);

  const data = useContext(MyContext);

  console.log(data);

  return (
    <div>
      {/* <h1>{data}</h1> */}
      {/* <button onClick={() => setdata("Hello, world!")}>Click me</button> */}
    </div>
  );
};

export default Detail;
