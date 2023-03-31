import { useState } from "react";
import "../styles/screens/home.scss";

function Home() {
  return (
    <div className="home">
      <div className="title">Hello Donut World</div>
      <canvas id="scene"></canvas>
    </div>
  );
}

export default Home;
