/**
    TableContent.react.js

    @author:
      - Derek Johnston

    @desc:
      - The actual <table> element inside the Table component.
*/
import React, { Component } from "react";
import TableContentHead from "./TableContentHead.react";
import TableContentBody from "./TableContentBody.react";

class TableContent extends Component {
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
    return <table className="table-content">
      <TableContentHead data={ this.props.data.headers } />
      <TableContentBody rows={ this.props.data.rows } />
    </table>
  }
}

export default TableContent;
