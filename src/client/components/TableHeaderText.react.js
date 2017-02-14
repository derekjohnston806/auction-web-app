/**
    TableHeaderText.react.js

    @author:
      - Derek Johnston

    @desc:
      - Provide text for the table header component.
*/
import React, { Component } from "react";

class TableHeaderText extends Component {
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
    return <h2 className="table-header-text">
      { this.props.text }
    </h2>
  }
}

export default TableHeaderText;
