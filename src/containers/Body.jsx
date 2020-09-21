import React, { Component } from "react";
import Post from "./Post";

class Body extends Component {
  // recipe.onClick() {
  //   render_full_recipes()
  // }

  // about.onClick() {
  //   render_about_page()
  // }

  // home.onClick() {
  //   render_home_page()
  // }

  render() {
    return (
      <div className="blog-body">
        <hr />
        <div className="inside-body">
          <Post />
        </div>
      </div>
    );
  }
}

export default Body;
