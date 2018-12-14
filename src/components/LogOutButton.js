import "../styles/LogOutButton.css";
import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class LogOutButton extends React.Component {
  render() {
    return (
      // button below takes user to the login page
      //
      <Link to="/LoginForm.js">
        <Button className="logOutButton" onClick={this.setRedirect}>
          Log Out
        </Button>
      </Link>
    );
  }
}

export default LogOutButton;
