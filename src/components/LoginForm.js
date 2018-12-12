import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenMainFeed } from "../actions/action";
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

  handleLogin = event => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <div className="login-form">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h1 className="ui image header">
              <div className="content">Login To Your Account</div>
            </h1>
          </div>
        </div>

        <form
          action="https://s.codepen.io/voltron2112/debug/PqrEPM?"
          method="get"
          className="ui large form"
        >
          <div className="ui stacked secondary segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  type="text"
                  onChange={this.handleCheckUserName}
                  required
                  placeholder="Enter Username"
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  type="password"
                  onChange={this.handleCheckPassword}
                  required
                  placeholder="Enter Password"
                />
              </div>
            </div>
              <div
                className="ui fluid large teal submit button"
                onClick={this.handleLogin}
              >
                Login
              </div>
          </div>
          <Link to="/registration">
            <div className="ui message">
              New To Us?{" "}
              Register
              {/* <a
                href="https://s.codepen.io/voltron2112/debug/PqrEPM?"
                onClick={this.setRedirect}
              >
                Register
              </a> */}
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
    login: loginData => dispatch(loginThenMainFeed(loginData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
