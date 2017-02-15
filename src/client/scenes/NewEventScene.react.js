/**
    NewEventScene.js

    @author:
      - Derek Johnston

    @desc:
      - In this scene, the user can submit a form for the creation of a new event.
*/
import React, { Component } from "react";
import Header from "../components/Header.react";
import HeaderText from "../components/HeaderText.react";
import Form from "../components/Form.react";
import FormInputGroup from "../components/FormInputGroup.react";
import FormSubmit from "../components/FormSubmit.react";

class NewEventScene extends Component {
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

    this.state = {
      name: "",
      org: "",
      date: "",
      location: "",
      firstGoal: "",
      secondGoal: "",
      thirdGoal: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOrgChange = this.handleOrgChange.bind(this);
    this.handleEventNameChange = this.handleEventNameChange.bind(this);
    this.handleEventDateChange = this.handleEventDateChange.bind(this);
    this.handleEventLocationChange = this.handleEventLocationChange.bind(this);
    this.handleEventFirstGoalChange = this.handleEventFirstGoalChange.bind(this);
    this.handleEventSecondGoalChange = this.handleEventSecondGoalChange.bind(this);
    this.handleEventThirdGoalChange = this.handleEventThirdGoalChange.bind(this);
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
    return <div className="scene">
      <Header>
        <HeaderText text="New Event" />
      </Header>
      <Form onSubmit={ this.handleSubmit }>
        <FormInputGroup id="new-event-org" label="Organization Name" value={this.state.org} onChange={this.handleOrgChange} />
        <FormInputGroup id="new-event-name" label="New Event Name" value={this.state.name} onChange={this.handleEventNameChange} />
        <FormInputGroup id="new-event-date" type="date" label="Event Date" value={this.state.date} onChange={this.handleEventDateChange} />
        <FormInputGroup id="new-event-location" label="Event Location" value={this.state.location} onChange={this.handleEventLocationChange} />
        <FormInputGroup id="new-event-first-goal" label="Event Goal" value={this.state.firstGoal} onChange={this.handleEventFirstGoalChange} />
        <FormInputGroup id="new-event-second-goal" label="Event Second Reach Goal" value={this.state.secondGoal} onChange={this.handleEventSecondGoalChange} />
        <FormInputGroup id="new-event-third-goal" label="Event Third Reach Goal" value={this.state.thirdGoal} onChange={this.handleEventThirdGoalChange} />
        <FormSubmit value="Create New Event" />
    </Form>
    </div>
  }

  /**
    handleSubmit()

    @desc:
      - Submit the new event form.

    @param:
      - null

    @return:
      - null
  */
  handleSubmit() {
    console.log("form submitting");
    console.log(this.state);
  }

  /**
    handleEventNameChange(event)

    @desc:
      - Set the new state for the text in the event name input field.

    @param:
      - event (Object): The change event object.

    @return:
      - null
  */
  handleEventNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  /**
    handleOrgChange(event)

    @desc:
      - Set the new state for the text in the event organization input field.

    @param:
      - event (Object): The change event object.

    @return:
      - null
  */
  handleOrgChange(event) {
    this.setState({
      org: event.target.value
    });
  }

  /**
    handleEventDateChange(event)

    @desc:
      - Set the new state for the text in the event date input field.

    @param:
      - event (Object): The change event object.

    @return:
      - null
  */
  handleEventDateChange(event) {
    this.setState({
      date: event.target.value
    });
  }

  /**
    handleEventLocationChange(event)

    @desc:
      - Set the new state for the text in the event location input field.

    @param:
      - event (Object): The change event object.

    @return:
      - null
  */
  handleEventLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  /**
    handleEventFirstGoalChange(event)

    @desc:
      - Set the new state for the text in the event first goal input field.

    @param:
      - event (Object): The change event object.

    @return:
      - null
  */
  handleEventFirstGoalChange(event) {
    this.setState({
      firstGoal: event.target.value
    });
  }

  /**
    handleEventSecondGoalChange(event)

    @desc:
      - Set the new state for the text in the event second goal input field.

    @param:
      - event (Object): The change event object.

    @return:
      - null
  */
  handleEventSecondGoalChange(event) {
    this.setState({
      secondGoal: event.target.value
    });
  }

  /**
    handleEventThirdGoalChange(event)

    @desc:
      - Set the new state for the text in the event third goal input field.

    @param:
      - event (Object): The change event object.

    @return:
      - null
  */
  handleEventThirdGoalChange(event) {
    this.setState({
      thirdGoal: event.target.value
    });
  }
}

export default NewEventScene;
