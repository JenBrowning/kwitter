import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Button } from "semantic-ui-react";
=======
import { Button } from 'semantic-ui-react';
>>>>>>> b915baba06926f63e6d6fa9eb9dd2f432aea2044

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
