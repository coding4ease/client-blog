import React from "react";
import User from "./User";

function Post(props) {
  return (
    <div className="post">
      <a href="">
        <img
          src="https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastapenne.jpg"
          alt="Food pic"
        />
      </a>
      <div className="inside-post">
        <User />
        <div className="post-text">
          <a href="">
            <h3>
              <span>Appetizers for your dinner party</span>
            </h3>
            <p>
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading. Wel...
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
