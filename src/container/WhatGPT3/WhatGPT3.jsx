import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination.
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="For a moment, let’s go back in time before SPAs existed: In the past, websites and web applications
were rendered from the server."
        />
        <Feature
          title="knowledgebase"
          text="For a moment, let’s go back in time before SPAs existed: In the past, websites and web applications
were rendered from the server."
        />
        <Feature
          title="education"
          text="For a moment, let’s go back in time before SPAs existed: In the past, websites and web applications
were rendered from the server."
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
