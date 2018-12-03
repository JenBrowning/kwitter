import "../styles/SignUpButton.css";
import React from "react";

class SignUpButton extends React.Component {
  render() {
    return (
      // button below takes user to the main (feed) page
      <button className="signUpButton"
        // onClick={this.props.toPopupBox}
      >SignUp</button>
    );
  }
}

export default SignUpButton;

// to hide/show results:
// onClick: function() {
// this.setState({ showResults: true });
