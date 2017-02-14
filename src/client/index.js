/**
    index.js

    @author:
      - Derek Johnston

    @desc:
      - The main entry-point for the client-side React application.
*/
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Application extends Component {
  render() {
    return <div>
      <h1>Hello, React.js!</h1>
    </div>
  }
}

ReactDOM.render(<Application />, document.getElementById("render-target"));
