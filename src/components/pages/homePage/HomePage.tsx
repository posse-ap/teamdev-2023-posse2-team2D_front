import React from "react";
import { Link } from "react-router-dom";
import { createSearchParams, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";

export const HomePage =() => {

  const navigate = useNavigate();

  const params: string = createSearchParams({
    query1: "value3",
    query2: "value4"
  }).toString();

  return (
    <>
    <div className={styles.root}>
      <h1>Sample Home</h1>
      <nav>
        <ul>
          <li><Link to="table">Table</Link></li>
          <li><Link to="page1">Sample Page1</Link></li>
          <li><Link to="page2">Sample Page2</Link></li>
          <li><Link to="page2?query1=value1&query2=value2">Sample Page2 With Query1</Link></li>
          <li><Link to={`page2?${params}`}>Sample Page2 With Query2</Link></li>
          <li><Link to="page3_hello">Sample Page3 Hello</Link></li>
          <li><Link to="page3_hi">Sample Page3 Hi</Link></li>
        </ul>

        <button onClick={() => navigate("page4")}>Sample Page4</button>
      </nav>  
    </div>
    </>
  );
}