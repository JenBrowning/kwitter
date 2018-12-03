import "../styles/App.css";
import React from 'react';
import PopUpBox from './PopUpBox';
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import LoginForm from "./LoginForm";

class App extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <div className="signInBox">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default App;
