import "../styles/LogOutButton.css";
import React from "react";
import { Button } from 'semantic-ui-react';

class LogOutButton extends React.Component {
  render() {
    return (
      // button below takes user to the login page
      //
      <Button
        className="logOutButton"
        // onClick={this.props.toLoginPage}
      >
        Log Out
      </Button>
    );
  }
}

export default LogOutButton;
