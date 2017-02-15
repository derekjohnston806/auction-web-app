/**
    FormInputGroup.react.js

    @author:
      - Derek Johnston

    @desc:
      - A div wrapper for a label and an input element.
*/
import React, { Component } from "react";
import FormInputLabel from "./FormInputLabel.react";
import FormInputText from "./FormInputText.react";
import FormInputDate from "./FormInputDate.react";

class FormInputGroup extends Component {
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

    this.getFormInput = this.getFormInput.bind(this);
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
    return <div className="form-group">
      <FormInputLabel id={this.props.id} text={this.props.label} />
      { this.getFormInput() }
    </div>
  }

  /**
    getFormInput()

    @desc:
      - Check the 'type' property of the component and render the
        appropriate input element.

    @param:
      - null

    @return:
      - An input component.
  */
  getFormInput() {
    switch (this.props.type) {
      case "date":
        return <FormInputDate
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      default:
        return <FormInputText
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.onChange}
        />
    }
  }
}

export default FormInputGroup;
