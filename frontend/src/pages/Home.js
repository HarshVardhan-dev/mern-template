import React, { useEffect, useState } from "react";
import API from "../api/api";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    API.get("/")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Welcome to MERN Template</h1>
      <p>{data}</p>
    </div>
  );
};

export default Home;
