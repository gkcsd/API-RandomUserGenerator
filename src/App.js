import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";

const App = () => {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    const details = data.Results[0];

    setDetails(details);
  };

  useEffect(() => fetchDetails(), []);

  return <div></div>;
};
export default App;
