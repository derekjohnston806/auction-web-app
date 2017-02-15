/**
    NewEventsButton.react.js

    @author:
      - Derek Johnston

    @desc:
      - A button component which when pressed will cause the application to
        navigate to the "new events" scene.
*/
import React, { Component } from "react";

class NewEventsButton extends Component {
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
    return <button type="button" className="new-event-button" onClick={ this.props.onClick }>
      New Event
    </button>
  }
}

export default NewEventsButton;
