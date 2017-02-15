/**
    FormInputLabel.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for the <label> tag.
*/
import React, { Component } from "react";

class FormInputLabel extends Component {
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
    return <label htmlFor={this.props.id}>
      {this.props.text}
    </label>
  }
}

export default FormInputLabel;
