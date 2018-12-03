import "../styles/LoginButton.css";
import React from "react";

const initialLoginState={

}

class LoginButton extends React.Component {
  render() {
    return (
      // button below takes user to the main (feed) page
      // 
      <button className="loginButton"
        // onClick={this.props.toMainPage}
      >Login</button>
    );
  }
}

export default LoginButton;

// to hide/show results:
// onClick: function() {
// this.setState({ showResults: true });
