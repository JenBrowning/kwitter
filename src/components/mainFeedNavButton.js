import "../styles/mainFeedNavButton.css";
import React from "react";
import { Link } from 'react-router-dom';

class MainFeedNavButton extends React.Component {
  render() {
    return (
      // button below takes user to the main page
      // 
      <Link to='/mainFeed'><button className="mainFeedNavButton"
        onClick={this.setRedirect}
      >Main Page</button></Link>
    );
  }
}

export default MainFeedNavButton;