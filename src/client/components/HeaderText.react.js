/**
    HeaderText.react.js

    @author:
      - Derek Johnston

    @desc:
      - Display text for an application's header.
*/
import React, { Component } from "react";

class HeaderText extends Component {
  /**
    render()

    @desc:
      - Draw the component on the screen.

    @param:
      - null

    @return:
      - null
  */
  render() {
    return <h1 className="header-text">
      { this.props.text }
    </h1>
  }
}

export default HeaderText;
