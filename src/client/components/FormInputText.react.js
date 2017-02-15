/**
    FormInputText.react.js

    @author:
      - Derek Johnston

    @desc:
      - A react component for the 'input[type="text"]' element.
*/
import React, { Component } from "react";

class FormInputText extends Component {
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
      type="text"
      className="form-input-text"
      onChange={this.props.onChange}
      value={this.props.value}
      id={this.props.id}
    />
  }
}

export default FormInputText;
