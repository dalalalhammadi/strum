import React from "react";
import { Title, Description, ShopImage } from "../styles";
import ukulelepic from "../ukulele draw.jpeg";

const Home = () => {
  return (
    <div>
      <Title>strum</Title>
      <Description>The ukulele hunt</Description>
      <ShopImage src={ukulelepic} />
    </div>
  );
};

export default Home;
