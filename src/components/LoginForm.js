import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/action";
import { Link } from "react-router-dom";
// Might need import for the link to RegistrationPage

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleCheckUserName = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleCheckPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleLogIn = event => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <div className="login-form">
        <form>
          <fieldset>
            <input
              type="text"
              onChange={this.handleCheckUserName}
              required
              placeholder="Enter username"
            />
          </fieldset>
          <fieldset>
            <input
              type="password"
              onChange={this.handleCheckPassword}
              required
              placeholder="Enter Password"
            />
          </fieldset>
        </form>
        <br />
        <div>{this.props.result}</div>
        <button onClick={this.handleLogIn}>Login</button>

        <Link to="/registration">
          <button onClick={this.setRedirect}>New Users Sign up Here!</button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    result: state.LoginResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: loginData => dispatch(login(loginData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
