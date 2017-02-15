/**
    FormInputDate.react.js

    @author:
      - Derek Johnston

    @desc:
      - A date selector input component.
*/
import React, { Component } from "react";

class FormInputDate extends Component {
  /**
    constructor(props)

    @desc:
      - Create an instance of NewEventsButton

    @param:
      - props (Object): The component's properties passed in by parents.

    @return:
      - An instance of NewEventsButton
  */
  constructor(props) {
    super(props);
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
    return <input
      type="date"
      className="form-input-date"
      onChange={this.props.onChange}
      value={this.props.value}
      id={this.props.id}
    />
  }
}

export default FormInputDate;
