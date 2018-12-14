import "../styles/LogOutButton.css";
import React from "react";
<<<<<<< HEAD
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
=======
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/action';
>>>>>>> b915baba06926f63e6d6fa9eb9dd2f432aea2044

class LogOutButton extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      // button below takes user to the login page
      //
      <Link to="/LoginForm.js">
        <Button className="logOutButton" onClick={this.setRedirect}>
          Log Out
        </Button>
      </Link>
=======
      <Button
        className="logOutButton"
        onClick={this.props.logoutUser}
      >
        Log Out
      </Button>
>>>>>>> b915baba06926f63e6d6fa9eb9dd2f432aea2044
    );
  }
}


const mapDispatchToProps = {
  logoutUser
};

export default connect(
  null,
  mapDispatchToProps
)(LogOutButton);
