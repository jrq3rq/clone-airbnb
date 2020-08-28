import React from "react";
import "./Home.css";
import Banner from "./Banner";
import { Card } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__action">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="home__action">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
