/**
    TableContentRow.react.js

    @author:
      - Derek Johnston

    @desc:
      - A <tr> element for a TableContent component.
*/
import React, { Component } from "react";

class TableContentRow extends Component {
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
    return <tr className="table-content-row">
      { this.props.children }
    </tr>
  }
}

export default TableContentRow;
