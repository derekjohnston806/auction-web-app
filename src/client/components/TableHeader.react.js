/**
    TableHeader.react.js

    @author:
      - Derek Johnston

    @desc:
      - Provide a header for a Table component.
*/
import React, { Component } from "react";
import TableHeaderText from "./TableHeaderText.react";

class TableHeader extends Component {
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
    return <div className="table-header">
      <TableHeaderText text={ this.props.text } />
      { this.props.actionButton }
    </div>
  }
}

export default TableHeader;
