import React, { Component } from "react";
import { register } from "../actions/action";
import { connect } from "react-redux";
import Header from '../styles/Header.css';
import LoginForm from "./LoginForm";

class RegistrationPage extends Component {
  state = {
    username: "",
    password: "",
    displayName: ""
  };
  handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleChangeDisplayName = event => {
    this.setState({
      displayName: event.target.value
    });
  };
  handleRegister = event => {
    this.props.register({
      username: this.state.username,
      password: this.state.password,
      displayName: this.state.displayName
    });
  };
  render() {
    return (
      <div className="registrationPage">
        <input
          type="text"
          onChange={this.handleChangeUsername}
          required
          placeholder="Username"
        />
        <input
          type="password"
          onChange={this.handleChangePassword}
          required
          placeholder="Password"
        />
        <input
          type="text"
          onChange={this.handleChangeDisplayName}
          required
          placeholder="Display Name"
        />
        <br />
        <button onClick={this.handleRegister}>Register</button>
        <div>{this.props.result}</div>

        {/* <LoginForm /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.registerResult
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: registerData => dispatch(register(registerData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);
