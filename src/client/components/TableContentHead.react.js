/**
    TableContentHead.react.js

    @author:
      - Derek Johnston

    @desc:
      - The header row for a TableContent component.
*/
import React, { Component } from "react";
import TableContentRow from "./TableContentRow.react";

class TableContentHead extends Component {
  /**
    constructor(props)

    @desc:
      - Create an instance of TableContentHead

    @param:
      - props (Object): The component's properties passed in by parents.

    @return:
      - An instance of TableContentHead
  */
  constructor(props) {
    super(props);

    // Bind the custom methods to the instance.
    this.getHeaderComponents = this.getHeaderComponents.bind(this);
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
    return <thead className="table-content-head">
      <TableContentRow>
        { this.getHeaderComponents() }
      </TableContentRow>
    </thead>
  }

  /**
    getHeaderComponents()

    @desc:
      - Given the header strings array passed in through props,
        add these strings as <th> elements to the table content.

    @param:
      - null

    @return:
      - Return a mapping of the data property as <th> elements.
  */
  getHeaderComponents() {
    return this.props.data.map((element) => {
      return <th key={ "thead-" + element }>
        { element }
      </th>
    });
  }
}

export default TableContentHead;
