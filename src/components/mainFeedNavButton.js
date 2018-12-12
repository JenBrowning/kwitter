import "../styles/mainFeedNavButton.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

class MainFeedNavButton extends React.Component {
  render() {
    return (
      // button below takes user to the main page
      //
      <Link to="/mainFeed">
        <Button className="mainFeedNavButton" onClick={this.setRedirect}>
          Main Page
        </Button>
      </Link>
    );
  }
}

export default MainFeedNavButton;
