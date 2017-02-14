/**
    DashboardScene.react.js

    @author:
      - Derek Johnston

    @desc:
      - A scene container for the application dashboard. The dashboard should
        display all the user's events and provide the ability to
        add, edit, and delete events.
*/
import React, { Component } from "react";
import Header from "../components/Header.react";
import HeaderText from "../components/HeaderText.react";
import Table from "../components/Table.react";

class DashboardScene extends Component {
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

    this.state = {
      tableData: {
        headers: [],
        rows: []
      }
    };

    this.fetchTableData = this.fetchTableData.bind(this);
  }

  /**
    componentWillMount()

    @desc:
      - When the component loads into memory, fetch the data for the table.

    @param:
      - null

    @return:
      - null
  */
  componentWillMount() {
    this.fetchTableData();
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
        <HeaderText text="Auction Dashboard" />
      </Header>
      <Table headerText="My Events" data={ this.state.tableData } />
    </div>
  }

  /**
    fetchTableData()

    @desc:
      - Fetch the data used to populate the "My Events" table and set
        it to the component's state.

    @param:
      - null

    @returns:
      - null
  */
  fetchTableData() {
    this.setState({
      tableData: {
        headers: ["Organization", "Event Name", "Date", "Location", "Main Goal", "Participants", "$ Raised"],
        rows: [
          {
            id          : "test-event-0",
            org         : "Make a Wish",
            name        : "Waltzing for wishes",
            date        : "4/8/2017",
            location    : "Overton Hotel",
            goal        : "$900,000",
            participants: "512",
            raised      : "$0"
          },
          {
            id          : "test-event-1",
            org         : "Communities in Schools",
            name        : "Fundraising Gala",
            date        : "02/24/2017",
            location    : "Merket Alumni Center",
            goal        : "$120,000",
            participants: "256",
            raised      : "$0"
          }
        ]
      }
    })
  }
}

export default DashboardScene;
