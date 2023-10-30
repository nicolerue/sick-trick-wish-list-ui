import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Cards from "../Cards/Cards";
import { getTricksApi } from "../../apiCall";

function App() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    getTricksApi()
      .then((data) => {
        setTricks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 data-cy="submit">Sick Trick Wish List</h1>
      <Form tricks={tricks} setTricks={setTricks} />
      <Cards tricks={tricks} />
    </div>
  );
}

export default App;
