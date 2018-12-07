import "../styles/mainFeedNavButton.css";
import React from "react";

class mainFeedNavButton extends React.Component {
  render() {
    return (
      // button below takes user to the main page
      // 
      <button className="mainFeedNavButton"
        // onClick={this.props.toLoginPage}
      >Main Page</button>
    );
  }
}

export default mainFeedNavButton;