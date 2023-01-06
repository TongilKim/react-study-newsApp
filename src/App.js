import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NewsList from "./components/NewsList";

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        " https://newsapi.org/v2/top-headlines?country=ca&apiKey=d323e20b89124db0bf6385868964d567"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return <NewsList />;
}

export default App;
