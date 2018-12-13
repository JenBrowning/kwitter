import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';

class ProfilePageNavButton extends React.Component {
  render() {
    return (
      // button below takes user to the main page
      //
      <Link to="/userProfile">
        <Button className="profilePageNavButton">Profile Page</Button>
      </Link>
    );
  }
}

export default ProfilePageNavButton;
