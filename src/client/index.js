/**
    index.js

    @author:
      - Derek Johnston

    @desc:
      - The main entry-point for the client-side React application.
*/
import React, { Component }               from "react";
import ReactDOM                           from "react-dom";
import { Router, Route, browserHistory }  from "react-router";
import DashboardScene from "./scenes/DashboardScene.react";

class Application extends Component {
  /**
    render()

    @desc:
      - Draw the Application on the screen.

    @param:
      - null

    @return:
      - null
  */
  render() {
    return <Router history={ browserHistory }>
      <Route path="/" component={ DashboardScene } />
    </Router>
  }
}

ReactDOM.render(<Application />, document.getElementById("render-target"));
