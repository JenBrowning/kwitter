import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/action";
import { Link } from "react-router-dom";
// import { Form } from "semantic-ui-react";
import "../styles/LoginForm.css";
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
        <div class="ui middle aligned center aligned grid">
          <div class="column">
            <h1 class="ui image header">
              <div class="content">Login To Your Account</div>
            </h1>
          </div>
        </div>

        <form
          action="https://s.codepen.io/voltron2112/debug/PqrEPM?"
          method="get"
          class="ui large form"
        >
          <div class="ui stacked secondary segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon" />
                <input
                  type="text"
                  onChange={this.handleCheckUserName}
                  required
                  placeholder="Enter Username"
                />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon" />
                <input
                  type="password"
                  onChange={this.handleCheckPassword}
                  required
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <Link to="/userProfile">
              <div
                class="ui fluid large teal submit button"
                onClick={this.handleLogin}
              >
                Login
              </div>
            </Link>
          </div>
          <Link to="/registration">
            <div class="ui message">
              New To Us?{" "}
              <a
                href="https://s.codepen.io/voltron2112/debug/PqrEPM?"
                onClick={this.setRedirect}
              >
                Register
              </a>
            </div>
          </Link>
        </form>
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
