import "../styles/LogOutButton.css";
import React from "react";

class LogOutButton extends React.Component {
  render() {
    return (
      // button below takes user to the login page
      // 
      <button className="logOutButton"
        // onClick={this.props.toLoginPage}
      >Log Out</button>
    );
  }
}

export default LogOutButton;