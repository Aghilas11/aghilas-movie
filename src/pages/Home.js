import React from "react";
import Navigation from "../components/Navigation";
import Title from "../components/Title";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <div className="header">
      <Title />
      <Navigation />
      <Movies />
    </div>
  );
};

export default Home;
