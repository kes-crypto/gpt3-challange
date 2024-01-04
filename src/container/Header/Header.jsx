import React from "react";
import "./header.css";
import image from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="gpt3__header section-padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 open AI
        </h1>
        <p>
          Yet bed for travelling assistance indulgence unpleasing. Not thoughts
          all exercise blessing.Indulgence way everything joy alteration
          boisterous the attachment. Party we years to order allow asked for.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={image} alt="people image" />
          <p>1600 requested access in the last 24hrs</p>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
}

export default Header;
