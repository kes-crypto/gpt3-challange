import React from "react";
import "./App.css";
import "./index.css";

import {
  Header,
  Footer,
  WhatGPT3,
  Features,
  //Blog,
  Possibility,
} from "./container";

import { Article, CTA, Feature, Brand, Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
