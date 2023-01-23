import React, { useState } from "react";
import ScrollComp from "./ScrollComp";
import VideoComp from "./Video";

const Wrapp = () => {
  
  return (
    <div className="Wrap">
      <div className="container">
        <ScrollComp/>
        <VideoComp />
      </div>
    </div>
  );
};

export default Wrapp;
