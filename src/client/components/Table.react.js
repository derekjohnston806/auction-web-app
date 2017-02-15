/**
    Table.react.js

    @author:
      - Derek Johnston

    @desc:
      - Display a table with a header and content.
*/
import React, { Component } from "react";
import TableHeader from "./TableHeader.react";
import TableContent from "./TableContent.react";

class Table extends Component {
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
    return <div className="table">
      <TableHeader text={ this.props.headerText } actionButton={ this.props.actionButton } />
      <TableContent data={ this.props.data } />
    </div>
  }
}

export default Table;
