/**
    Header.react.js

    @author:
      - Derek Johnston

    @desc:
      - A header html component
*/
import React, { Component } from "react";

class Header extends Component {
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
    return <header className="header">
      { this.props.children }
    </header>
  }
}

export default Header;
