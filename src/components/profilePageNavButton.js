import React from "react";
import { Link } from "react-router-dom";

class ProfilePageNavButton extends React.Component {
  render() {
    return (
      // button below takes user to the main page
      //
      <Link to="/userProfile">
        <button className="profilePageNavButton">Profile Page</button>
      </Link>
    );
  }
}

export default ProfilePageNavButton;
