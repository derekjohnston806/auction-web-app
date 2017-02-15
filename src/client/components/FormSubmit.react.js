/**
    FormSubmit.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for an 'input[type="submit"]' element.
*/
import React, { Component } from "react";

class FormSubmit extends Component {
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
      type="submit"
      value={this.props.value}
    />
  }
}

export default FormSubmit;
