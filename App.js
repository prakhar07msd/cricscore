import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import MyCard from "./Mycard";
import { getMatches } from "./Api/Api";
function App() {
  
  const [matches, setmatches] = useState([]);


  useEffect(() => {
    getMatches()
      .then((data) =>setmatches(data.matches))
      .catch(error=>alert("Could not load data"));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my List</h1>
      {
        matches.map((match)=>(
          <MyCard match="match" />
        ))
      }
    </div>
  );
}

export default App;
