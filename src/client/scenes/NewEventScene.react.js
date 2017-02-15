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

class NewEventScene extends Component {
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
    </div>
  }
}

export default NewEventScene;
