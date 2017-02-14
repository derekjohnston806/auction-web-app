/**
    TableContentBody.react.js

    @author:
      - Derek Johnston

    @desc:
      - The <tbody> element for the TableContent component.
*/
import React, { Component } from "react";
import obj2arr from "../../helpers/obj2arr";
import TableContentRow from "./TableContentRow.react";

class TableContentBody extends Component {
  /**
    constructor(props)

    @desc:
      - Create an instance of TableContentBody

    @param:
      - props (Object): The component's properties passed in by parents.

    @return:
      - An instance of TableContentBody
  */
  constructor(props) {
    super(props);

    this.getRows = this.getRows.bind(this);
  }

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
    return <tbody className="table-content-body">
      { this.getRows() }
    </tbody>
  }

  /**
    getRows()

    @desc:
      - Given the rows property, render the row elements for the table body.

    @param:
      - null

    @return:
      - A mapping of the <TableContentRow> components for the rows property data.
  */
  getRows() {
    return this.props.rows.map((row) => {
      const rowID = row.id;
      delete row.id;
      return <TableContentRow key={ "row-" + rowID }>
        { obj2arr(row).map((element) => {
          return <td key={ "row-" + rowID +"-element-" + element }>
            { element }
          </td>
        }) }
      </TableContentRow>
    });
  }
}

export default TableContentBody;
