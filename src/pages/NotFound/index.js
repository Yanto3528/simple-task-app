import React, { Component } from "react";
import { Link } from "react-router-dom";

import illustration from "../../assets/not-found.png";

import { NotFoundContainer } from "./styles";

class NotFound extends Component {
  render() {
    return (
      <NotFoundContainer>
        <h1>404 Not Found</h1>
        <p>The page that you are looking for does not exist.</p>
        <img src={illustration} alt="not found" />
        <Link to="/">Back to Home</Link>
      </NotFoundContainer>
    );
  }
}

export default NotFound;
