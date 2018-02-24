import React from "react";
import { render } from "react-dom";
import List from "./test";
// import Hello from './Hello';

const styles = {
  fontFamily: "sans-serif",
  fontSize: 20,
  backgroundColor: "gray",
  color: "#300000"
};

const shopping = ["Eggs", "Bread", "Milk", "Coffee"];

const App = () => (
  <div style={styles}>
    <h1 style={{ color: "#7f0000" }}>My Page </h1>
    <h2>My List</h2>
    <List title="What to buy?" shopping={shopping} />
  </div>
);

render(<App />, document.getElementById("root"));
